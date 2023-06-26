import { CProps } from '../type';

function FProp(props: CProps) {
  return (
    <div>
      FProps name: {props.name} &nbsp; FProps age: {props.age}
    </div>
  );
}

export default FProp;
