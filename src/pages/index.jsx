import VARIANT_1_MOBILE from "../components/slot/variant_1/mobile/variant_1.mobile.component";
import VARIANT_1_DESKTOP from "../components/slot/variant_1/desktop/variant_1.desktop.component";
import VARIANT_2_MOBILE from "../components/slot/variant_2/mobile/variant_2.mobile.component";
import VARIANT_2_DESKTOP from "../components/slot/variant_2/desktop/variant_2.desktop.component";
import VARIANT_3 from "../components/slot/variant_3/variant_3.component";
import VARIANT_4 from "../components/slot/variant_4/variant_4.component";
import VARIANT_5 from "../components/slot/variant_5/variant_5.component";
import VARIANT_6_MOBILE from "../components/slot/variant_6/mobile/variant_6.mobile.component";
import VARIANT_6_DESKTOP from "../components/slot/variant_6/desktop/variant_6.desktop.component";
import {
  VARIANT_1_DATA,
  VARIANT_2_DATA,
  VARIANT_4_DATA,
  VARIANT_6_DATA,
} from "../data/data";
import { getEssentialServerSideProps } from "@/context/essential.context";

const Index = () => {
  return (
    <div>
      <section>
        <VARIANT_1_MOBILE content={VARIANT_1_DATA[0]} />
        <VARIANT_1_DESKTOP content={VARIANT_1_DATA[0]} />
      </section>
      <section>
        <VARIANT_3 />
      </section>
      <br />
      <br />
      <section>
        <VARIANT_2_MOBILE content={VARIANT_2_DATA[0]} />
        <VARIANT_2_DESKTOP content={VARIANT_2_DATA[0]} />
      </section>
      <section>
        <VARIANT_4 content={VARIANT_4_DATA[0]} />
      </section>
      <section>
        <VARIANT_1_DESKTOP content={VARIANT_1_DATA[1]} />
        <VARIANT_1_MOBILE content={VARIANT_1_DATA[1]} />
      </section>
      <section>
        <VARIANT_6_MOBILE content={VARIANT_6_DATA[0]} />
        <VARIANT_6_DESKTOP content={VARIANT_6_DATA[0]} />
      </section>
      <section>
        <VARIANT_6_MOBILE content={VARIANT_6_DATA[1]} />
        <VARIANT_6_DESKTOP content={VARIANT_6_DATA[1]} />
      </section>
      <section>
        <VARIANT_5 />
      </section>
    </div>
  );
};

export const getServerSideProps = (ctx) => ({
  props: getEssentialServerSideProps(ctx),
});

export default Index;
