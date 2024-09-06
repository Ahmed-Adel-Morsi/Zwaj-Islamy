import { useParams } from "react-router-dom";

function FormDetails() {
  const { formNumber } = useParams();
  return (
    <div className="text-center font-bold text-4xl p-7">
      Form {formNumber} Details
    </div>
  );
}

export default FormDetails;
