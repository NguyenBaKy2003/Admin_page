import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedPlan } = location.state || {}; // Nhận dữ liệu từ state

  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");

  // Redirect nếu không có plan được chọn
  if (!selectedPlan) {
    navigate("/"); // Quay lại trang chủ nếu không có kế hoạch
    return null;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setPaymentStatus("Processing payment...");

    // Giả lập xử lý thanh toán
    setTimeout(() => {
      setPaymentStatus("Payment successful! Thank you for your purchase.");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center py-10">
      <div className="bg-white w-full max-w-lg p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-red-500 mb-6">
          Payment for {selectedPlan.name}
        </h1>

        {/* Thông tin gói */}
        <div className="mb-6">
          <p className="text-lg text-gray-700">Plan: {selectedPlan.name}</p>
          <p className="text-sm text-gray-600">Price: {selectedPlan.price}</p>
          <p className="text-sm text-gray-600">
            Duration: {selectedPlan.duration}
          </p>
        </div>

        {/* Biểu mẫu thanh toán */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="cardholderName"
              className="block text-sm font-semibold text-gray-600">
              Cardholder Name
            </label>
            <input
              type="text"
              id="cardholderName"
              value={cardholderName}
              onChange={(e) => setCardholderName(e.target.value)}
              required
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name on the card"
            />
          </div>

          <div>
            <label
              htmlFor="cardNumber"
              className="block text-sm font-semibold text-gray-600">
              Card Number
            </label>
            <input
              type="tel"
              id="cardNumber"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
              pattern="\d{13,19}"
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your card number"
            />
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label
                htmlFor="expiryDate"
                className="block text-sm font-semibold text-gray-600">
                Expiry Date
              </label>
              <input
                type="month"
                id="expiryDate"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                required
                className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="cvv"
                className="block text-sm font-semibold text-gray-600">
                CVV
              </label>
              <input
                type="tel"
                id="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                required
                pattern="\d{3,4}"
                className="w-full mt-2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter CVV"
              />
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 focus:outline-none">
              Pay Now
            </button>
          </div>
        </form>

        {/* Trạng thái thanh toán */}
        {paymentStatus && (
          <div className="mt-6 text-center text-gray-700 font-semibold">
            <p>{paymentStatus}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;