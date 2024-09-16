import TeamsContainer from "@/components/pages/teams/TeamsContainer";

interface Props {
  searchParams: { page?: string; q?: string };
}

const TeamsPage = async ({ searchParams }: Props) => {
  const page = searchParams.page ?? 1;
  const query = searchParams.q ?? "";

  return <TeamsContainer page={Number(page)} query={query} />;
};
export default TeamsPage;
