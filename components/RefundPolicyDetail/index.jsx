import React from "react";

const RefundPolicyDetail = () => {
  return (
    <div className="refund-info-area p-6 bg-[#ffffffb3] rounded-lg shadow-md hover:shadow-lg transition">
      <div className="refund-inner">
        <h2 className="text-[#2F2F2F] text-base font-medium my-2 mb-4">
          PAYMENTS
        </h2>

        <ul className="text-[#2F2F2F] text-sm font-light list-decimal list-outside pl-6 space-y-3  mb-4">
          <li>
            The PLATFORM shall solely handle all financial transactions against
            the Services.
          </li>
          <li>
            No payments for the Services will be made other than on PLATFORM’s
            payment gateway.
          </li>
          <li>
            Where there is consultation fee, the Patients must pay the
            consultation fee and VAT before joining the doctor queue for
            consultation.
          </li>
          <li>
            Where there is no consultation fee, the Patients will not be
            required to make any payment and they will be directly transferred
            to the doctor consultation queue.
          </li>
          <li>
            Once the Patient has made the payment and joined the queue, s/he
            will not be able to cancel the payment except as provided herein.
          </li>
        </ul>
        <h2 className="text-[#2F2F2F] text-base font-medium my-2 mb-4">
          REFUND AND CANCELLATION
        </h2>

        <ul className="text-[#2F2F2F] text-sm font-light list-decimal list-outside pl-6 space-y-3  mb-4">
          <li>
            {" "}
            If the wait time in the queue is more than 60 minutes, customers can
            request for cancellation of the consultation or book another
            available doctor from the same department.{" "}
          </li>
          <li>
            If a customer is not interested to consult with the doctor referred
            by us then a refund will be made deducting a small payment
            processing fee.
          </li>
          <li>
            If a doctor can not consult a Patient due to any reason within 60
            minutes of Initiation Request, then we shall ask for a convenient
            time from the patient thus we can reschedule the appointment time.
            If a patient is not interested to reschedule the time or change the
            doctor as per our suggestion then the user will get a full refund.
          </li>
          <li>
            If a Patient cancels a consultation prior to the video call of the
            Doctor after acceptance by the Doctor of the Patient’s request
            before the expiry of 60 minutes from the Initiation Request, a 5%
            fee will be deducted and the remaining fee will be refunded to the
            Patient. There may be additional charges to make the refund. For
            example, if the user wants the money to be refunded to bKash, bKash
            transaction fee will be deducted.
          </li>
          <li>
            If a patient fails to join the video consultation on time according
            to the appointment schedule due to own problem and network issue,
            Mr. Healer will not be liable for that. In that case, we may ask the
            doctor to consider the patient’s problem and give another schedule,
            but it is the doctor’s choice whether he or she will reschedule the
            appointment or not. Whatever the doctor’s decision is, the patient
            will get NO REFUND from Mr. Healer in this case.{" "}
          </li>
          <li>
            For any cancellation and refund please email to:{" "}
            <a href="mailto:info@mrhealerbd.com">info@mrhealerbd.com</a>
            Refund process may take up to 14 working days.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RefundPolicyDetail;
