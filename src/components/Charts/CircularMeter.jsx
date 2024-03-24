import {
  CircularGaugeComponent,
  AxesDirective,
  AxisDirective,
  PointersDirective,
  PointerDirective,
} from "@syncfusion/ej2-react-circulargauge";
function CircularMeter({ width, height }) {
  return (
    <CircularGaugeComponent style={{ width, height }}>
      <AxesDirective>
        <AxisDirective>
          <PointersDirective>
            <PointerDirective value={73}></PointerDirective>
          </PointersDirective>
        </AxisDirective>
      </AxesDirective>
    </CircularGaugeComponent>
  );
}

export default CircularMeter;
