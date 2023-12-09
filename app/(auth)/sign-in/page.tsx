import { FastAuth, UserAuthForm } from "@/src/components/modules";
import { Container } from "@/src/components/elements";
const page = () => {
  return (
    <Container className="pt-16">
      <div className="flex flex-col gap-12 max-w-[514px] mx-auto">
        <UserAuthForm />
        <FastAuth />
      </div>
    </Container>
  );
};

export default page;
