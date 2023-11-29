import { ExtendableText } from "../../../hocs/withExtendable.hoc.component";

export const DNA = ({ iterableText, className }) => (
    <ExtendableText
      text="DNA"
      className={className}
      iterableText={iterableText}
    />
);
export const Specs = ({ iterableText, className }) => (
    <ExtendableText
      text="Specs"
      className={className}
      iterableText={iterableText}
    />
);
export const FitAndCare = ({ iterableText, className }) => (
    <ExtendableText
      text="Fit & Care"
      className={className}
      iterableText={iterableText}
    />
);