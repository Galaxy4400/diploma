import { useAuth } from "../../app/providers/auth";
import { AccountCreateForm } from "../../features/account";
import { Container } from "../../shared/ui/technical";
import { PageHeader } from "../../widgets/page-header";

export const AccountCreatePage = () => {
	const { authUser } = useAuth();

	return (
		<Container>
			<PageHeader title="Создание счета" />
			<AccountCreateForm userId={authUser.id} />
		</Container>
	)
};