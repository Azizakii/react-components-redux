import Header from "./components/Header/Header";
import TeachingSection from "./components/TeachingSection";
import DifferencesSection from "./components/DifferencesSection";
import IntroSection from "./components/IntroSection";
import TabsSection from "./components/TabsSection";
import FeedbackSection from "./components/FeedbackSection";
import InformationSection from "./components/InformationSection";
import EffectSection from "./components/EffectSection";
import { useUI } from "./hooks/useUI"

export default function App() {
	const { dispatch, tab, visible, changeTab, changeVisible } = useUI();

	//скрытие заголовка
	// setTimeout(() => {
	//   setVisible(false)
	// }, 3000)

	return (
		<>
			<Header />
			<main>
				<IntroSection />

				<TabsSection
					active={tab}
					onChange={changeTab}
				/>

				{tab === "main" && (
					<>
						<TeachingSection />
						<DifferencesSection />
					</>
				)}

				{tab === "feedback" && <FeedbackSection />}

				{tab === "effect" && <EffectSection />}

				{tab === "information" && <InformationSection />}
			</main>
		</>
	);
}
