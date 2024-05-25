"use client";
import React from "react";
import { PinContainer } from "../ui/3d-pin";

export function AnimatedPinDemo() {
	return (
		<div className="h-[40rem] w-full flex items-center justify-center z-[1]">
			<PinContainer title="The key in your journey" href="/dashboard">
				<div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[45rem] h-[35rem] ">
					<h3 className="max-w-xs !pb-2 !m-0 font-bold  text-2xl text-slate-100">
						Weight Tracker
					</h3>
					<div className="text-base !m-0 !p-0 font-normal">
						<span className="text-neutral-400 text-xl">
							Weight Tracker will help you control and observe weight at which
							you are at.
						</span>
					</div>
					<div className="flex flex-1 w-full rounded-lg mt-4 bg-gtransparent">
						<img src="/display.png" className="rounded-xl fit-cover" alt="" />
					</div>
				</div>
			</PinContainer>
		</div>
	);
}
