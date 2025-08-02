// app/payment-success/page.tsx
import { prisma } from "@/lib/prisma";

interface PaymentSuccessProps {
  searchParams: Promise<{
    payment_id?: string;
    payment_request_id?: string;
    payment_status?: string;
  }>;
}

export default async function PaymentSuccess({
  searchParams,
}: PaymentSuccessProps) {
  const { payment_id, payment_request_id, payment_status } = await searchParams;

  if (payment_status === "Credit" && payment_id && payment_request_id) {
    // ✅ Update database with payment_id (instamojoPaymentId)
    await prisma.autismPackage.update({
      where: { orderId: payment_request_id },
      data: {
        razorpayPaymentId: payment_id,
        razorpaySignature: "Verified-redirect", // Or store a hash if needed
      },
    });
  }

  return (
    <div className="px-3 py-20 text-center">
      <h1 className="text-3xl font-bold text-green-600">
        🎉 Payment Successful!
      </h1>
      <p className="mt-4">
        Thank you for buying the <strong>Autism Care Package</strong>. Your
        support helps us spread awareness and provide better care.
      </p>
      <p className="mt-2 text-gray-700">
        📞 For any questions, feel free to call us at{" "}
        <strong>+91 96936 71377</strong>.
      </p>
    </div>
  );
}
