import { ProgressBarComponent } from "@syncfusion/ej2-react-progressbar";
function ProgressBar({ range }) {
  return (
    <ProgressBarComponent
      id="linear"
      type="Linear"
      height="80"
      value={range}
      animation={{
        enable: true,
        duration: 2000,
        delay: 0,
      }}
    ></ProgressBarComponent>
  );
}
export default ProgressBar;
