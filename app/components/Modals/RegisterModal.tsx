"use client";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import axios from "axios";
import { useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../Inputs/Input";
import toast from "react-hot-toast";
import useLoginModal from "@/app/hooks/useLoginModal";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const RegisterModal = () => {
	const registerModal = useRegisterModal();
	const loginModal = useLoginModal();
	const [isLoading, setIsLoading] = useState(false);
	const [heightUnit, setHeightUnit] = useState("cm"); // state for height unit
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			name: "",
			email: "",
			password: "",
			birthYear: "",
			gender: "",
			height: "",
			heightFeet: "",
			heightInches: "",
		},
	});

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);

		if (data.birthYear > 2023 || data.birthYear < 1950) {
			toast.error("Enter valid birth year");
			setIsLoading(false);
			return;
		}

		// Convert height to cm if height is entered in feet and inches
		let heightInCm;
		if (heightUnit === "feet") {
			const feet = parseFloat(data.heightFeet || "0");
			const inches = parseFloat(data.heightInches || "0");
			heightInCm = feet * 30.48 + inches * 2.54;
		} else {
			heightInCm = parseFloat(data.height || "0");
		}

		if (heightInCm > 350 || heightInCm < 60) {
			toast.error("Enter valid height");
			setIsLoading(false);
			return;
		}

		const userData = {
			...data,
			height: heightInCm,
		};

		console.log(data);

		axios
			.post("/api/register", userData)
			.then(() => {
				registerModal.onClose();
				signIn("credentials", {
					...userData,
					redirect: false,
				}).then((callback) => {
					setIsLoading(false);

					if (callback?.ok) {
						toast.success("Logged in");
						router.push("/dashboard");
						router.refresh();
						loginModal.onClose();
					}

					if (callback?.error) {
						toast.error(callback.error);
					}
				});
			})
			.catch((err: any) => {
				console.log(err);
				toast.error("Something went wrong");
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const switchModal = () => {
		registerModal.onClose();
		loginModal.onOpen();
	};

	const bodyContent = (
		<div className="flex flex-col gap-3">
			<Heading title="Register" subtitle="Create an account" />
			<div className="flex gap-3">
				<Input
					id="name"
					label="Full Name"
					disabled={isLoading}
					errors={errors}
					required
					register={register}
				/>
				<Input
					id="email"
					label="Email"
					disabled={isLoading}
					errors={errors}
					required
					register={register}
				/>
			</div>
			<Input
				id="password"
				label="Password"
				type="password"
				disabled={isLoading}
				errors={errors}
				required
				register={register}
			/>
			<div className="flex gap-3">
				<Input
					id="birthYear"
					label="Birth Year"
					type="number"
					disabled={isLoading}
					errors={errors}
					required
					register={register}
				/>
				<div className="flex flex-col gap-1 w-full">
					<select
						id="gender"
						disabled={isLoading}
						{...register("gender", { required: true })}
						className={`w-full p-5 pt-5 pl-4 font-light bg-neutral-800/75 border-2 border-neutral-800/75 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed relative form-select ${
							errors.gender ? "border-red-500" : ""
						}`}
					>
						<option value="">Select gender</option>
						<option value="male">Male</option>
						<option value="female">Female</option>
					</select>
					{errors.gender && (
						<p className="text-red-500 text-sm">This field is required</p>
					)}
				</div>
			</div>
			<div className="flex flex-col gap-1">
				<div className="flex gap-3">
					<select
						disabled={isLoading}
						value={heightUnit}
						onChange={(e) => setHeightUnit(e.target.value)}
						className=" w-fit p-5 pt-5 pl-4 font-light bg-neutral-800/75 border-2 border-neutral-800/75 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed relative form-select text-md"
					>
						<option value="cm">cm</option>
						<option value="feet">feet/inches</option>
					</select>
					{heightUnit === "cm" ? (
						<Input
							id="height"
							label="Height (cm)"
							type="number"
							disabled={isLoading}
							errors={errors}
							required
							register={register}
						/>
					) : (
						<div className="flex gap-3 w-full">
							<Input
								id="heightFeet"
								label="Feet"
								type="number"
								disabled={isLoading}
								errors={errors}
								required
								register={register}
							/>
							<Input
								id="heightInches"
								label="Inches"
								type="number"
								disabled={isLoading}
								errors={errors}
								required
								register={register}
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);

	const footerContent = (
		<div className="flex flex-col text-center items-center justify-center py-1 pt-3 relative">
			<p className="flex flex-row gap-2">
				Already have an account?{" "}
				<span
					onClick={switchModal}
					className="hover:cursor-pointer flex block transition hover:underline"
				>
					Login
				</span>
			</p>
		</div>
	);

	return (
		<Modal
			disabled={isLoading}
			isOpen={registerModal.isOpen}
			title="Register"
			actionLabel="Register"
			onClose={registerModal.onClose}
			onSubmit={handleSubmit(onSubmit)}
			body={bodyContent}
			footer={footerContent}
		/>
	);
};

export default RegisterModal;
