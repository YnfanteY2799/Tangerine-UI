import { useState } from "react";
import Button from "@/components/Button/index";
import ButtonGroup from "@/components/Button/button-group";
import Input from "@/components/Input/index";

export default function App() {
	const [value, setValue] = useState("");

	return (
		<main className="mx-auto flex max-w-lg flex-col gap-10 px-6 py-12">
			<header>
				<h1 className="text-2xl font-semibold tracking-tight text-white">Tangerine UI</h1>
				<p className="mt-1 text-sm text-zinc-400">Local playground — imports from <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-xs">src/</code></p>
			</header>

			<section className="flex flex-col gap-4">
				<h2 className="text-sm font-medium uppercase tracking-wide text-zinc-500">Button</h2>
				<div className="flex flex-wrap gap-3">
					<Button color="primary" variant="solid">
						Primary
					</Button>
					<Button color="secondary" variant="bordered">
						Secondary
					</Button>
					<Button variant="ghost" isDisabled>
						Disabled
					</Button>
				</div>
				<ButtonGroup>
					<Button size="sm">One</Button>
					<Button size="sm">Two</Button>
					<Button size="sm">Three</Button>
				</ButtonGroup>
			</section>

			<section className="flex flex-col gap-4">
				<h2 className="text-sm font-medium uppercase tracking-wide text-zinc-500">Input</h2>
				<Input label="Email" type="email" placeholder="you@example.com" value={value} onChange={(e) => setValue(e.target.value)} />
				<Input label="Password" type="password" placeholder="••••••••" />
			</section>
		</main>
	);
}
