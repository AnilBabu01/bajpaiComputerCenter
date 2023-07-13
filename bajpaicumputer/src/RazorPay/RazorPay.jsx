import { backendApiUrl } from "../config/config";

const apikey = "rzp_test_D9zjF2V5Xy3LDQ";
const secereate = "Rd0Jc7RkBjGGNDcJG53gJ0GB";
// key_id: "rzp_test_D9zjF2V5Xy3LDQ",
// key_secret: "nEXpQuz39VoJjp3YTTQ1yAlK",
let responsedata = {};
function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const __DEV__ = document.domain === "localhost";
export const displayRazorpay = async ({ ammount, userid }, callback) => {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
  if (!res) {
    alert("Razorpay SDK failed to load. Are you online?");
    return;
  }
  const data = await fetch(
    `${backendApiUrl}payment/razorpay?ammount=` + ammount,
    {
      method: "POST",
    }
  ).then((t) => t.json());
  const options = {
    key: apikey,
    currency: data.currency,
    amount: data.amount.toString(),
    order_id: data.id,
    name: "Find My Next Subscribation",
    description: "Thank you for nothing. Please give us some money",
    image: `https://www.google.com/imgres?imgurl=https%3A%2F%2Fe7.pngegg.com%2Fpngimages%2F674%2F464%2Fpng-clipart-class-computer-software-computer-lab-school-computer-class-service.png&tbnid=iXFxyTFgobxpZM&vet=12ahUKEwjAwIvf_YqAAxXUoOkKHaKEBvIQMygHegUIARDTAQ..i&imgrefurl=https%3A%2F%2Fwww.pngegg.com%2Fen%2Fpng-tuvjl&docid=nFsW2Bdy_e5hHM&w=900&h=480&q=computer%20course%20photo%20png%20free%20hd&ved=2ahUKEwjAwIvf_YqAAxXUoOkKHaKEBvIQMygHegUIARDTAQ`,
    handler: function (response) {
      callback(response);
    },
    prefill: {
      id: userid,
      ammount,
    },
  };
  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};
