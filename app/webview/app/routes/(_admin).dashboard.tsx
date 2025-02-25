import {
	Page,
	PageHeader,
	PageTitle,
	PageSection,
} from "~/components/page";

export default function AdminDashboard() {
    return (
        <Page>
			<PageHeader>
				<PageTitle title={"Dashboard"} />
			</PageHeader>
			<PageSection id={"dashboard"} >
				<p>管理者用のダッシュボード</p>
			</PageSection>
		</Page>
    )
}