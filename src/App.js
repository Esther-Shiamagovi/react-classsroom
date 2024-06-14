import About from "./About";

export const Introduction = ()=>{
  return <h2>What is React?</h2>;
  
};
const App= ()=>{
  return (
    <div>
      <h1>Introduction to React.JS</h1>
      <Introduction/>
<About/>
    </div>
  )
}
export default App;
