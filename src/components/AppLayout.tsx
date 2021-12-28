import NavBar from "./NavBar";
export interface IAppLayout {
  children: React.ReactElement;
}

const AppLayout: React.FC<IAppLayout> = (props) => {
  const { children } = props;
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default AppLayout;
