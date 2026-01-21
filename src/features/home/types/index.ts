export interface PromptButton {
	id: string
	label: string
}

export interface HomePageProps {
	// Add props here if needed in the future
}

export interface FooterLink {
	label: string
	href?: string
}

export interface FooterSection {
	title: string
	links: FooterLink[]
}
