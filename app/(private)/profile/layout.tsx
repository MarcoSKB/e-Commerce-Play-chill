import { Container } from "@/src/components/elements";

interface Props {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  mainContent: React.ReactNode;
}

export default function Layout({ sidebar, mainContent }: Props) {
  return (
    <Container className="flex flex-col gap-6 py-8">
      <h1 className="text-5xl font-bold">Profile</h1>
      <div className="flex w-full gap-6 border-t border-white border-opacity-10 pt-7">
        <div className="max-w-[280px] w-full bg-darkBlue rounded-lg">
          {sidebar}
        </div>
        <div className="w-full bg-darkBlue rounded-lg px-8 py-3">
          {mainContent}
        </div>
      </div>
    </Container>
  );
}
