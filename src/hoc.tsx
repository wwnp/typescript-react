import  React  from 'react';

type BaseProps = {

  primTitle: string,
  // secTitle:number
}

const Button = ({ primTitle }: BaseProps) => (
  <button>
    {primTitle}
  </button>
);

const withToggle = (PassedComponent: React.ComponentType<BaseProps>) => {
  return (props: BaseProps) => {
    return (
      <PassedComponent
        {...props}
      />
    );
  }
}
const ToogleButton = withToggle(Button);
export const App: React.FC = () => <ToogleButton primTitle={'123'} />;


// FULL version

// type BaseProps = {
//   primTitle: string,
//   secTitle?: string
// }
// type InjectedProps = {
//   toggleStatus: Boolean,
//   toogle: () => void
// }

// const Button = ({ primTitle, secTitle, toggle, toggleStatus }: any) => (
//   <button onClick={toggle}>
//     {toggleStatus ? primTitle : secTitle}
//   </button>
// );

// const withToggle = <BaseProps extends InjectedProps>(PassedComponent: React.ComponentType<BaseProps>) => {
//   return (props:BaseProps) => {
//     const [toggleStatus, toggle] = useState(false);

//     return (
//       <PassedComponent
//         {...props}
//         toggle={() => toggle(!toggleStatus)}
//         toggleStatus={toggleStatus}
//       />
//     );
//   }
// }

// const ToogleButton = withToggle(Button);
