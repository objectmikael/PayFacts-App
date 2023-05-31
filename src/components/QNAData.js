
const qNAData = [
    {
      id: 1,
      question: "What is a payment gateway?",
      answer: "A payment gateway is a service that authorizes and processes online payments for e-commerce websites. It securely captures and transfers payment data between the customer, merchant, and the payment processor."
    },
    {
      id: 2,
      question: "What is a chargeback?",
      answer: "A chargeback is a transaction reversal initiated by the cardholder's bank. It occurs when a customer disputes a transaction and requests a refund from their card-issuing bank. The bank initiates a chargeback process, and the merchant is typically required to provide evidence to support the validity of the transaction."
    },
    {
      id: 3,
      question: "What is a merchant account?",
      answer: "A merchant account is a type of bank account that allows businesses to accept payments via credit cards and other electronic payment methods. It is necessary for a business to have a merchant account to process card transactions."
    },
    {
      id: 4,
      question: "What is a prepaid card and how does it work?",
      answer: "A prepaid card is a payment card that is loaded with a specific amount of money in advance. It can be used for purchases until the loaded amount is exhausted. Prepaid cards are not linked to a bank account and do not involve credit."
    },
    {
      id: 5,
      question: "What is a virtual payment terminal?",
      answer: "A virtual payment terminal is an online interface that allows merchants to manually enter and process card payments. It eliminates the need for physical payment terminals and enables businesses to accept payments remotely, such as over the phone or through email."
    },
    {
      id: 6,
      question: "How do peer-to-peer payment apps like Venmo and PayPal work?",
      answer: "Peer-to-peer payment apps like Venmo and PayPal enable users to send and receive money directly from their mobile devices. They link to the user's bank account or credit card and facilitate instant transfers between individuals or businesses."
    },
    {
      id: 7,
      question: "What is a remittance?",
      answer: "A remittance refers to the transfer of money from a person working in a foreign country back to their home country. It is often associated with international money transfers sent by migrant workers to support their families or for other purposes."
    },
    {
      id: 8,
      question: "What is a recurring payment?",
      answer: "A recurring payment is an automated payment set up by a customer to authorize regular, ongoing transactions. It is commonly used for subscription-based services or regular bills, where the payment amount is deducted at specified intervals."
    },
    {
      id: 9,
      question: "How does a payment plan work?",
      answer: "A payment plan allows customers to spread the cost of a purchase over a period of time by making regular installment payments. It is often used for high-value purchases, where the customer pays a portion of the total amount at regular intervals until the debt is fully paid."
    },
    {
      id: 10,
      question: "What is a payment API?",
      answer: "A payment API (Application Programming Interface) is a set of protocols and tools that allow developers to integrate payment processing functionality into their applications or websites. It enables the communication between the application, payment gateway, and other payment service providers."
    },
    {
      id: 11,
      question: "How do mobile payments using NFC work?",
      answer: "Mobile payments using Near Field Communication (NFC) technology allow users to make contactless payments by simply tapping their mobile devices on a compatible payment terminal. The devices communicate wirelessly to transfer payment information securely."
    },
    {
      id: 12,
      question: "What is a digital wallet?",
      answer: "A digital wallet is a software-based application that allows users to store and manage their payment card information, loyalty cards, and other credentials for making digital payments. It provides a convenient and secure way to make online and mobile payments."
    },
    {
      id: 13,
      question: "How does a payment card reader work?",
      answer: "A payment card reader is a device used to accept card payments in physical locations. It reads the information stored on the payment card's magnetic stripe or chip and securely transmits the data to the payment processor for authorization and settlement."
    },
    {
      id: 14,
      question: "What is a payment aggregator?",
      answer: "A payment aggregator, also known as a payment facilitator or a merchant aggregator, is a service provider that allows businesses to accept payments without the need for their own merchant accounts. They aggregate multiple merchants under a single master merchant account."
    },
    {
      id: 15,
      question: "What is a payment fraud and how can it be prevented?",
      answer: "Payment fraud refers to unauthorized or fraudulent transactions conducted using someone else's payment information. It can be prevented through various measures such as implementing secure payment processing systems, fraud detection tools, and strong authentication methods."
    },
    {
      id: 16,
      question: "What is a payment settlement?",
      answer: "Payment settlement is the process of transferring funds from the customer's bank account to the merchant's account to complete a transaction. It involves the authorization, capture, and transfer of funds between relevant parties."
    },
    {
      id: 17,
      question: "How does a payment gateway integrate with a website?",
      answer: "To integrate a payment gateway with a website, developers typically use APIs provided by the payment gateway provider. The integration involves implementing the necessary code and configurations to securely transmit payment information and receive responses from the gateway."
    },
    {
      id: 18,
      question: "What is a payment reconciliation?",
      answer: "Payment reconciliation is the process of matching and verifying financial transactions to ensure consistency between different records, such as sales data, payment receipts, and bank statements. It helps businesses identify discrepancies and ensure accurate accounting."
    },
    {
      id: 19,
      question: "What is a direct debit and how does it work?",
      answer: "A direct debit is a payment method that allows a business or organization to collect funds directly from a customer's bank account. With the customer's authorization, the specified amount is automatically debited from the account at regular intervals or as needed."
    },
    {
      id: 20,
      question: "How do international payments work?",
      answer: "International payments involve transferring funds between different countries and currencies. It typically requires the use of intermediary banks, currency exchange, and adherence to international regulations and standards."
    },
    {
      id: 21,
      question: "What is a chargeback fee?",
      answer: "A chargeback fee is a fee charged to a merchant by their acquiring bank or payment processor when a chargeback is initiated by a customer. It covers the administrative costs associated with processing the chargeback."
    },
    {
      id: 22,
      question: "How do subscription payments work?",
      answer: "Subscription payments involve recurring payments made by customers for ongoing access to a product or service. The customer typically provides authorization for regular payments, and the subscription amount is automatically charged at specified intervals."
    },
    {
      id: 23,
      question: "What is a payment gateway tokenization?",
      answer: "Payment gateway tokenization is a security method that replaces sensitive payment card data with a unique token. The token is used for transaction processing, while the actual card data is securely stored by the payment gateway provider."
    },
    {
      id: 24,
      question: "How does a payment processor ensure transaction security?",
      answer: "Payment processors employ various security measures, including encryption, tokenization, and fraud detection systems, to ensure transaction security. They adhere to industry security standards and work to protect sensitive payment data from unauthorized access or fraudulent use."
    },
    {
      id: 25,
      question: "What is a digital payment?",
      answer: "A digital payment refers to any payment made electronically, without the use of physical cash. It includes transactions conducted online, through mobile devices, or other digital platforms."
    },
    {
      id: 26,
      question: "What is a contactless payment?",
      answer: "A contactless payment is a payment method that allows customers to make transactions by simply tapping their contactless-enabled payment card or mobile device on a compatible payment terminal. It uses near-field communication (NFC) technology to securely transmit payment data."
    },
    {
      id: 27,
      question: "What is a payment gateway risk assessment?",
      answer: "A payment gateway risk assessment is a process carried out by payment gateways to evaluate and manage the risk associated with payment transactions. It involves analyzing various factors, such as transaction history, customer behavior, and fraud patterns, to detect and prevent potential fraudulent activity."
    },
    {
      id: 28,
      question: "What is a digital invoice?",
      answer: "A digital invoice, also known as an e-invoice, is an electronic version of a traditional paper invoice. It is generated, sent, and received digitally, simplifying the invoicing process and enabling faster and more efficient payment settlement."
    },
    {
      id: 29,
      question: "What is a payment gateway SSL certificate?",
      answer: "A payment gateway SSL (Secure Sockets Layer) certificate is a digital certificate that encrypts the data transmitted between a customer's web browser and the payment gateway. It ensures the secure transmission of sensitive payment information to protect it from unauthorized access or interception."
    },
    {
      id: 30,
      question: "What is a virtual POS terminal?",
      answer: "A virtual POS (Point of Sale) terminal is a software application that allows merchants to accept payments on their computer or mobile device. It emulates the functionality of a traditional physical POS terminal, enabling businesses to process card payments electronically."
    },
    {
      id: 31,
      question: "What is a PCI compliance scan?",
      answer: "A PCI compliance scan is a vulnerability assessment performed to check the security of a merchant's payment card infrastructure. It helps identify potential weaknesses or non-compliance with the Payment Card Industry Data Security Standard (PCI DSS)."
    },
    {
      id: 32,
      question: "How does a payment gateway handle recurring payments?",
      answer: "A payment gateway can handle recurring payments by securely storing customer payment information and initiating automatic charges at specified intervals. It simplifies the process for merchants and customers, ensuring timely payments without the need for manual intervention."
    },
    {
      id: 33,
      question: "What is a payment processing delay?",
      answer: "A payment processing delay refers to a situation where the processing of a payment transaction takes longer than expected. It can occur due to various factors, such as network issues, technical glitches, or additional verification requirements."
    },
    {
      id: 34,
      question: "What is a digital currency?",
      answer: "A digital currency, also known as cryptocurrency, is a form of digital or virtual money that uses cryptography for secure financial transactions, control the creation of new units, and verify the transfer of assets."
    },
    {
      id: 35,
      question: "What is a two-factor authentication (2FA) in payments?",
      answer: "Two-factor authentication (2FA) is a security measure that adds an extra layer of protection to payment transactions. It typically involves the use of two different authentication factors, such as a password and a unique verification code, to verify the identity of the user."
    },
    {
      id: 36,
      question: "What is a card verification code (CVC/CVV/CID)?",
      answer: "A card verification code (CVC), card verification value (CVV), or card identification (CID) is a three- or four-digit security code printed on payment cards. It helps verify that the cardholder has physical possession of the card during card-not-present transactions."
    },
    {
      id: 37,
      question: "What is an acquiring bank?",
      answer: "An acquiring bank, also known as a merchant bank or acquirer, is a financial institution that processes and settles payment card transactions on behalf of a merchant. It enables businesses to accept card payments by providing them with a merchant account and related services."
    },
    {
      id: 38,
      question: "What is a digital signature in payments?",
      answer: "A digital signature in payments is a cryptographic technique that provides authentication and integrity to electronic payment documents, such as invoices or contracts. It ensures that the document has not been altered and can be traced back to the signer."
    },
    {
      id: 39,
      question: "How does a payment gateway handle currency conversion?",
      answer: "A payment gateway can handle currency conversion by automatically converting the transaction amount from the customer's currency to the merchant's currency at the prevailing exchange rate. This enables businesses to accept payments in different currencies and receive funds in their desired currency."
    },
    {
      id: 40,
      question: "What is a payment processing fee?",
      answer: "A payment processing fee is a charge imposed by payment service providers or payment processors for the processing of payment transactions. It typically includes various components, such as interchange fees, assessment fees, and the provider's own service fees."
    },
    {
      id: 41,
      question: "What is a mobile point of sale (mPOS) system?",
      answer: "A mobile point of sale (mPOS) system is a portable payment solution that allows businesses to accept card payments using a smartphone or tablet. It typically involves a card reader device that connects to the mobile device and enables secure card transactions."
    },
    {
      id: 42,
      question: "What is a payment authorization?",
      answer: "A payment authorization is the process of verifying and approving a payment transaction before the actual funds transfer takes place. It involves checking the availability of funds, verifying cardholder information, and confirming that the transaction meets security requirements."
    },
    {
      id: 43,
      question: "What is a batch settlement?",
      answer: "A batch settlement is the process of settling a group or batch of payment transactions at once, typically at the end of the business day. It involves consolidating the transactions and transferring the total amount to the merchant's bank account."
    },
    {
      id: 44,
      question: "What is a payment gateway fraud detection?",
      answer: "Payment gateway fraud detection refers to the mechanisms and systems implemented by payment gateways to identify and prevent fraudulent transactions. It uses various techniques, such as machine learning, pattern recognition, and IP geolocation, to analyze transaction data and detect potential fraud."
    },
    {
      id: 45,
      question: "What is a closed-loop payment system?",
      answer: "A closed-loop payment system is a payment ecosystem where the payment is processed within a specific network or platform. It typically involves a proprietary payment method or card that can only be used within that system, such as store gift cards or loyalty program cards."
    },
    {
      id: 46,
      question: "What is a payment gateway chargeback?",
      answer: "A payment gateway chargeback occurs when a customer disputes a transaction and initiates a chargeback process through their card-issuing bank. The payment gateway provider receives the chargeback request, and the funds from the original transaction are debited from the merchant's account."
    },
    {
      id: 47,
      question: "What is a payment service provider (PSP)?",
      answer: "A payment service provider (PSP) is a company or platform that offers various payment processing services to merchants. It acts as an intermediary between the merchant, the customer, and the financial institutions involved in the payment transaction."
    },
    {
      id: 48,
      question: "What is a payment gateway recurring billing?",
      answer: "Payment gateway recurring billing is a feature that allows merchants to automatically charge customers at regular intervals for subscription-based services or recurring payments. The payment gateway securely stores the customer's payment information and initiates the recurring charges as per the defined schedule."
    },
    {
      id: 49,
      question: "What is a payment reversal?",
      answer: "A payment reversal, also known as a payment refund or a payment chargeback, is the process of returning funds from a completed transaction back to the customer's account. It can occur due to various reasons, such as customer disputes, fraud, or order cancellations."
    },
    {
      id: 50,
      question: "What is a third-party payment processor?",
      answer: "A third-party payment processor is a company or service provider that facilitates payment transactions on behalf of merchants. They offer payment processing solutions, often as an alternative to traditional acquiring banks, and handle the technical aspects of transaction processing and settlement."
    },
    {
        id: 51,
        question: "What is BNPL?",
        answer: "BNPL stands for Buy Now Pay Later, which is a payment option that allows customers to make purchases and pay for them in installments over time."
    },
    {
        id: 52,
        question: "How does BNPL work?",
        answer: "With BNPL, customers can select the option to pay in installments at the time of checkout. They can receive the product immediately and make payments over a specified period, usually interest-free."
    },
    {
        id: 53,
        question: "Is BNPL a form of credit?",
        answer: "While BNPL may resemble credit, it's typically considered a payment method rather than a traditional credit product. However, some BNPL services may conduct a soft credit check before approving transactions."
    },
    {
        id: 54,
        question: "What are the benefits of using BNPL?",
        answer: "Some benefits of using BNPL include the ability to make purchases without upfront payment, flexibility in managing payments, and the absence of interest charges for many BNPL services."
    },
    {
        id: 55,
        question: "Are there any fees or interest charges with BNPL?",
        answer: "Many BNPL services offer interest-free installment plans. However, some may charge late fees or penalties for missed payments. It's important to review the terms and conditions of the specific BNPL service you're using."
    },
    {
        id: 56,
        question: "Can anyone use BNPL?",
        answer: "BNPL eligibility may vary depending on the service provider. In general, individuals must meet age requirements, have a valid payment method, and pass any required checks conducted by the BNPL provider."
    },
    {
        id: 57,
        question: "How do I sign up for a BNPL service?",
        answer: "To sign up for a BNPL service, you typically need to create an account with the provider. This may involve providing personal information, linking a payment method, and agreeing to the terms and conditions."
    },
    {
        id: 58,
        question: "Which merchants accept BNPL?",
        answer: "BNPL is becoming increasingly popular, and many online and physical merchants accept it as a payment option. Look for the BNPL logo or check with the merchant directly to see if they support BNPL."
    },
    {
        id: 59,
        question: "What is the maximum amount I can spend with BNPL?",
        answer: "The maximum amount you can spend with BNPL depends on the specific provider and your creditworthiness. Different BNPL services may have different limits in place."
    },
    {
        id: 60,
        question: "How long is the BNPL repayment period?",
        answer: "The repayment period for BNPL varies depending on the provider and the terms you select. It can range from a few weeks to several months."
    },
    {
        id: 61,
        question: "What happens if I miss a payment with BNPL?",
        answer: "Missing a payment with BNPL can result in late fees or penalties. It's important to make payments on time to avoid any adverse consequences and to maintain a good relationship with the BNPL provider."
    },
    {
        id: 62,
        question: "Can I return or exchange items purchased with BNPL?",
        answer: "The return or exchange policy for items purchased with BNPL is determined by the merchant's policies. Contact the merchant or review their terms and conditions to understand their return and exchange processes."
    },
    {
        id: 63,
        question: "Can I use BNPL for online purchases only?",
        answer: "While BNPL is commonly used for online purchases, some providers offer the option to use BNPL for in-store purchases as well. Check with the BNPL service or the merchant to see if this option is available."
    },
    {
        id: 64,
        question: "Are there any age restrictions for using BNPL?",
        answer: "Yes, there are usually age restrictions for using BNPL services. The specific age requirements may vary depending on the country and the service provider."
    },
    {
        id: 65,
        question: "Does BNPL affect my credit score?",
        answer: "BNPL transactions may impact your credit score, depending on the provider and their reporting practices. Some providers report to credit bureaus, while others do not. Late or missed payments could potentially have a negative impact."
    },
    {
        id: 66,
        question: "Can I use BNPL for large purchases like electronics or furniture?",
        answer: "Yes, BNPL can often be used for large purchases like electronics or furniture, as long as the merchant supports BNPL as a payment option. Check with the merchant or BNPL service for specific details."
    },
    {
        id: 67,
        question: "Is BNPL available internationally?",
        answer: "Yes, BNPL services are available internationally, but availability may vary by country and service provider. Check with the BNPL provider to confirm if they operate in your country."
    },
    {
        id: 68,
        question: "Are there any hidden fees or charges with BNPL?",
        answer: "BNPL services should disclose any fees or charges in their terms and conditions. Review the terms carefully to understand any potential fees associated with your BNPL transactions."
    },
    {
        id: 69,
        question: "Can I use BNPL for recurring payments?",
        answer: "Some BNPL providers offer the option to use their service for recurring payments, such as subscriptions. Check with the specific BNPL service to see if this feature is available."
    },
    {
        id: 70,
        question: "Can I use BNPL for in-store purchases?",
        answer: "Some BNPL providers offer the option to use their service for in-store purchases. This usually involves using a mobile app or providing a digital payment method at the point of sale. Check with the BNPL service or the merchant for details."
    },
    {
        id: 71,
        question: "Can I pay off my BNPL balance early?",
        answer: "In many cases, you can pay off your BNPL balance early without any penalties or additional charges. Check with your BNPL provider to confirm their policy on early repayment."
    },
    {
        id: 72,
        question: "What happens if I want to cancel a BNPL order?",
        answer: "If you want to cancel a BNPL order, you should reach out to the merchant or the BNPL service directly. The cancellation process may vary depending on the specific circumstances and policies of the involved parties."
    },
    {
        id: 73,
        question: "Are there any restrictions on the types of products I can purchase with BNPL?",
        answer: "In general, there are no specific restrictions on the types of products you can purchase with BNPL. However, some merchants or BNPL providers may have their own restrictions or limitations in place."
    },
    {
        id: 74,
        question: "Is BNPL regulated by any financial authorities?",
        answer: "The regulations surrounding BNPL vary by country. In some regions, BNPL providers may be subject to financial regulations, while in others, they may operate under different rules. Check your local regulations to understand the applicable rules in your jurisdiction."
    },
    {
        id: 75,
        question: "Can I use BNPL to pay bills or utilities?",
        answer: "BNPL is typically not designed for paying bills or utilities. It is primarily used for purchasing goods and services from participating merchants. Consider using alternative payment methods for bill payments."
    },
    {
        id: 76,
        question: "What information do I need to provide to use BNPL?",
        answer: "To use BNPL, you may need to provide personal information such as your name, address, email, and sometimes your social security number or equivalent identification details. The specific information required may vary by provider and country."
    },
    {
        id: 77,
        question: "Can I use BNPL if I have a bad credit history?",
        answer: "BNPL providers may consider your credit history as part of their approval process. Some providers offer more flexible options for individuals with less-than-perfect credit, but approval is not guaranteed. Check with the specific BNPL provider for their eligibility criteria."
    },
    {
        id: 78,
        question: "What happens if I change my mind about a BNPL purchase?",
        answer: "If you change your mind about a BNPL purchase, you should review the return and cancellation policies of the merchant. Contact the merchant or the BNPL service for assistance with the cancellation or return process."
    },
    {
        id: 79,
        question: "Is my personal information secure with BNPL providers?",
        answer: "BNPL providers should have security measures in place to protect your personal information. Look for providers that use encryption and follow best practices for data security. Review their privacy policy for more information on how they handle your data."
    },
    {
        id: 80,
        question: "Can I have multiple BNPL accounts?",
        answer: "In most cases, you can have multiple BNPL accounts with different providers. However, it's important to manage your finances responsibly and avoid taking on more debt than you can comfortably repay."
    },
    {
        id: 81,
        question: "Can I use BNPL for travel bookings or vacations?",
        answer: "Some BNPL providers offer travel-specific options that allow you to use their service for booking flights, hotels, or vacation packages. Check with the BNPL provider or specific travel merchant for details."
    },
    {
        id: 82,
        question: "Are there any consequences for late or missed BNPL payments?",
        answer: "Late or missed BNPL payments can result in late fees, penalties, or additional interest charges, depending on the provider's terms and conditions. It's important to make payments on time to avoid any adverse consequences."
    },
    {
        id: 83,
        question: "Can I use BNPL for business expenses?",
        answer: "BNPL is primarily designed for personal purchases, but some providers offer business-specific BNPL solutions. Check with the BNPL provider to see if they have options available for business expenses."
    },
    {
        id: 84,
        question: "What happens if a BNPL merchant goes out of business?",
        answer: "If a BNPL merchant goes out of business, you should contact the BNPL provider for guidance. They will provide information on how to handle any ongoing payments or outstanding balances."
    },
    {
        id: 85,
        question: "Can I use BNPL for medical expenses or healthcare services?",
        answer: "In some cases, BNPL providers may offer healthcare-specific financing options. Check with the BNPL service or healthcare providers to see if this option is available for medical expenses or healthcare services."
    },
    {
        id: 86,
        question: "How do BNPL providers make money?",
        answer: "BNPL providers typically generate revenue through various sources, including transaction fees charged to merchants, interest charges for certain products or services, and partnerships with other financial institutions. Review the provider's terms and conditions to understand their specific revenue model."
    },
    {
        id: 87,
        question: "Can I use BNPL for online marketplaces like eBay or Amazon?",
        answer: "Some BNPL providers offer integrations with popular online marketplaces, allowing you to use BNPL for purchases on those platforms. Check with your BNPL provider to see if they support marketplaces like eBay or Amazon."
    },
    {
        id: 88,
        question: "Are there any restrictions on the use of BNPL for certain age groups?",
        answer: "BNPL providers may have age restrictions in place. Typically, you need to be at least 18 years old to use BNPL services. However, specific age requirements may vary depending on the provider and jurisdiction."
    },
    {
        id: 89,
        question: "Can I use BNPL for purchases made outside my home country?",
        answer: "Some BNPL services support international transactions, allowing you to use BNPL for purchases made outside your home country. Check with your BNPL provider to see if they offer this feature and if there are any restrictions or additional fees involved."
    },
    {
        id: 90,
        question: "Is BNPL available for non-residents or tourists?",
        answer: "The availability of BNPL for non-residents or tourists depends on the specific BNPL provider and their terms. Some providers may require residency or a local address to use their services. Check with the BNPL provider for their specific requirements."
    },
    {
        id: 91,
        question: "Can I use BNPL to pay off other debts or loans?",
        answer: "BNPL is generally not intended to be used for paying off existing debts or loans. It is primarily used for making new purchases. Consider exploring other financial options for debt consolidation or repayment."
    },
    {
        id: 92,
        question: "Can I use BNPL for cash advances or withdrawals?",
        answer: "BNPL is not designed for cash advances or withdrawals. It is typically used for making purchases with participating merchants. Consider alternative financial products for cash advances or withdrawals."
    },
    {
        id: 93,
        question: "How do I track my BNPL payments and balances?",
        answer: "Most BNPL providers offer online platforms or mobile apps where you can track your payments and balances. Log in to your BNPL account to access these features and monitor your transactions."
    },
    {
        id: 94,
        question: "Can I use BNPL for charity donations or fundraising?",
        answer: "BNPL is primarily used for purchasing goods and services from participating merchants. While it's not commonly used for charity donations or fundraising, some providers may offer specific options for these purposes. Check with your BNPL provider for details."
    },
    {
        id: 95,
        question: "Are there any income requirements for using BNPL?",
        answer: "BNPL providers may have income requirements in place to ensure the borrower's ability to repay. The specific income requirements may vary depending on the provider and the loan amount requested."
    },
    {
        id: 96,
        question: "Can I use BNPL for subscription services like streaming platforms?",
        answer: "Some BNPL providers offer the option to use their service for paying subscription fees, including streaming platforms. Check with your BNPL provider or the specific subscription service for details on how to set up BNPL payments."
    },
    {
        id: 97,
        question: "Is BNPL available for educational expenses like tuition or school fees?",
        answer: "BNPL is typically not designed for educational expenses like tuition or school fees. Explore alternative financing options specifically tailored for educational purposes."
    },
    {
        id: 98,
        question: "Can I use BNPL for purchasing digital goods or software?",
        answer: "BNPL can often be used for purchasing digital goods or software, as long as the merchant accepts BNPL as a payment option. Check with the merchant or your BNPL provider to confirm compatibility."
    },
    {
        id: 99,
        question: "Can I use BNPL for investments or trading?",
        answer: "BNPL is not typically used for investments or trading purposes. It's primarily focused on facilitating purchases of goods and services. Consider utilizing appropriate financial products for investments or trading."
    },
    {
        id: 100,
        question: "How do I contact customer support for my BNPL service?",
        answer: "To contact customer support for your BNPL service, check the provider's website or app for their contact information. You can typically reach out to them via phone, email, or live chat for assistance."
    }
]
    

export default qNAData