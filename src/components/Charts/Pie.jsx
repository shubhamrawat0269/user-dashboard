import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
} from "@syncfusion/ej2-react-charts";
import { pieData } from "../../data/dummy";

function Pie({ width, height }) {
  return (
    <AccumulationChartComponent id="charts" width={width} height={height}>
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          dataSource={pieData}
          xName="x"
          yName="y"
          radius="90%"
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
}
export default Pie;
