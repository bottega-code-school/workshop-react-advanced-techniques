import * as React from "react";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isSubmitting?: boolean;
  primary?: boolean;
  warning?: boolean;
}
export const Button = (props: IProps) => {
  const label = (
    <div className="btn-label-container">
      {props.isSubmitting ? "Submitting..." : props.children || "Submit"}
    </div>
  );

  const buildClassName = (): string => {
    let baseClassName: string = props?.className ? props.className : "btn";

    if (!props.className) {
      if (props.primary) {
        baseClassName += "-primary";
      } else if (props.warning) {
        baseClassName += "-warning";
      } else {
        baseClassName += "-default";
      }

      baseClassName = props.disabled
        ? `${baseClassName} ${baseClassName}-disabled`
        : baseClassName;
      baseClassName = props.isSubmitting
        ? `${baseClassName} ${baseClassName}-loading`
        : baseClassName;
    }

    return baseClassName;
  };

  const cleanedProps = () => {
    let obj = { ...props };
    obj.className = buildClassName();

    if (props.isSubmitting) {
      obj.disabled = true;
    }

    delete obj.isSubmitting;
    delete obj.primary;
    delete obj.warning;

    return obj;
  };

  return <button {...cleanedProps()}>{label}</button>;
};
