import { BrandBar } from "@/src/components/modules";
import { BottomBar, Container } from "@/src/components/elements";
import FooterNav from "./FooterNav";

const Footer = () => {
  return (
    <footer>
      <div className="border-t border-b border-solid border-darkPurple">
        <Container>
          <BrandBar />
          <FooterNav />
        </Container>
      </div>
      <Container>
        <BottomBar />
      </Container>
    </footer>
  );
};

export default Footer;
