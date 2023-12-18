import { BrandBar } from "@/src/components/modules";
import { Container } from "@/src/components/elements";
import FooterNav from "./FooterNav";
import BottomBar from "./FooterBottomBar";

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
