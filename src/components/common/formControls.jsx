import style from "./formControls.module.css";

//NEED TU REFACTOR!!!

export let Textarea = ({ input, meta, ...props }) => {
  let { touched, error, warning } = meta;
  return (
    <div>
      <textarea
        {...input}
        {...props}
        className={touched && error ? style.warn : ""}
      />
      {touched &&
        ((error && <span className={style.err}>{error}</span>) ||
          (warning && <span className={style.err}>{warning}</span>))}
    </div>
  );
};

export const Input = (props) => {
  let { input, meta, ...prop } = props;
  let { touched, error, warning } = meta;
  return (
    <div>
      <input
        {...input}
        {...prop}
        className={touched && error ? style.warn : ""}
      />
      {touched &&
        ((error && <span className={style.err}>{error}</span>) ||
          (warning && <span className={style.err}>{warning}</span>))}
    </div>
  );
};

// const formTags = (props) => {
//   return {
//     input: <input {...props} />,
//     textarea: <textarea {...props} />,
//   };
// };

// const ValidateTag = (tag, { input, meta, ...props }) => {
//   let { touched, error, warning } = meta;
//   return (
//     <div>
//       {formTags(input, props)[tag]}

//       {touched &&
//         ((error && <span className={style.err}>{error}</span>) ||
//           (warning && <span className={style.err}>{warning}</span>))}
//     </div>
//   );
// };

// export const LalaArea = ValidateTag("lalaarea");
