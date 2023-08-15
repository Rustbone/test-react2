import { PageLayout } from "../components/PageLayout";

export const NotFound = () => {
  return (
    <PageLayout>
      <h1>
        Упс, такой страницы нет. <a href="/test-react2/">🔗 На главную</a>
      </h1>
    </PageLayout>
  );
};
