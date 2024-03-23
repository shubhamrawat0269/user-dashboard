import {
  SmithchartComponent,
  SmithchartSeriesCollectionDirective,
  SmithchartSeriesDirective,
} from "@syncfusion/ej2-react-charts";
import { smithChartDirectives, smithChartdata } from "../../data/dummy";
function SmithChart({ width, height }) {
  return (
    <SmithchartComponent id="smithchart" style={{ width, height }}>
      <SmithchartSeriesCollectionDirective>
        <SmithchartSeriesDirective
          points={smithChartdata}
          name="Transmission1"
        ></SmithchartSeriesDirective>
        <SmithchartSeriesDirective
          points={smithChartDirectives}
          name="Transmission2"
        ></SmithchartSeriesDirective>
      </SmithchartSeriesCollectionDirective>
    </SmithchartComponent>
  );
}
export default SmithChart;
