"use client";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import axios from "axios";
import { useState } from "react";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../Inputs/Input";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import useEntryModal from "@/app/hooks/useEntryModal";

const EntryModal = () => {
	const registerModal = useRegisterModal();
	const entryModal = useEntryModal();
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const [weightUnit, setWeightUnit] = useState("kg");
	const [waistUnit, setWaistUnit] = useState("cm");
	const [hipUnit, setHipUnit] = useState("cm");

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			weight: "",
			waist: "",
			hip: "",
		},
	});

	const convertToKgAndCm = (data: FieldValues) => {
		const convertedData = {
			weight:
				weightUnit === "kg"
					? parseFloat(data.weight)
					: parseFloat(data.weight) * 0.453592,
			waist:
				waistUnit === "cm"
					? parseFloat(data.waist)
					: parseFloat(data.waist) * 2.54,
			hip:
				hipUnit === "cm" ? parseFloat(data.hip) : parseFloat(data.hip) * 2.54,
		};
		return convertedData;
	};

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setIsLoading(true);

		const convertedData = convertToKgAndCm(data);
		console.log(convertedData);

		setIsLoading(false);
	};

	const switchModal = () => {
		entryModal.onClose();
		registerModal.onOpen();
	};

	const bodyContent = (
		<div className="flex flex-col gap-3">
			<Heading title="Entry" subtitle="Please enter your details" />
			<div className="flex flex-row items-center justify-center gap-2">
				<Input
					id="weight"
					label="Weight"
					disabled={isLoading}
					errors={errors}
					required
					register={register}
				/>
				<select
					value={weightUnit}
					onChange={(e) => setWeightUnit(e.target.value)}
					disabled={isLoading}
					className="text-white w-1/4 text-lg p-3 pt-4 pb-4 px-8 font-light bg-neutral-800/75 border-2 border-neutral-800/75 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed relative"
				>
					<option value="kg">kg</option>
					<option value="lbs">lbs</option>
				</select>
			</div>
			<div className="flex flex-row items-center gap-2">
				<Input
					id="waist"
					label="Waist size"
					disabled={isLoading}
					errors={errors}
					required
					register={register}
				/>
				<select
					value={waistUnit}
					onChange={(e) => setWaistUnit(e.target.value)}
					disabled={isLoading}
					className="text-white w-1/4 text-lg p-3 pt-4 pb-4 px-8 font-light bg-neutral-800/75 border-2 border-neutral-800/75 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed relative"
				>
					<option value="cm">cm</option>
					<option value="in">inches</option>
				</select>
			</div>
			<div className="flex flex-row items-center gap-2">
				<Input
					id="hip"
					label="Hip size"
					disabled={isLoading}
					errors={errors}
					required
					register={register}
				/>
				<select
					value={hipUnit}
					onChange={(e) => setHipUnit(e.target.value)}
					disabled={isLoading}
					className="text-white w-1/4 text-lg p-3 pt-4 pb-4 px-8 font-light bg-neutral-800/75 border-2 border-neutral-800/75 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed relative"
				>
					<option value="cm">cm</option>
					<option value="in">inches</option>
				</select>
			</div>
		</div>
	);

	const footerContent = (
		<div className="flex flex-col text-center items-center justify-center py-1 pt-3 relative">
			<p className="flex flex-row gap-2">Don't give up on your goals!</p>
		</div>
	);

	return (
		<Modal
			disabled={isLoading}
			isOpen={entryModal.isOpen}
			title="Today's Entry"
			actionLabel="Complete Entry"
			onClose={entryModal.onClose}
			onSubmit={handleSubmit(onSubmit)}
			body={bodyContent}
			footer={footerContent}
		/>
	);
};

export default EntryModal;
