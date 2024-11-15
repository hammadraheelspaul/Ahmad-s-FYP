

export default function PerksCard({perkDetails}) {
    return (
        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-xs lg:flex-shrink-0 mb-4">
            <div className="rounded-2xl bg-white mt-8 py-5 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-10">
                <div className="mx-auto max-w-xs px-2">
                    <p className="text-base font-semibold text-gray-600">{perkDetails.title}</p>
                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                        <span className="text-5xl font-bold tracking-tight text-gray-900">${perkDetails.amount}</span>
                        <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                    </p>
                    <p className="mt-2 text-gray-600">{perkDetails.description}</p>
                    {/* <p className="mt-2 text-gray-600">Delivery Date: {perkDetails.deliveryDate}</p> */}
                    {
                        // perkDetails.quantity && <p className="mt-2 text-gray-600">Quantity: {perkDetails.quantity}</p>
                    }
                    <button
                        onClick={() => removeperkDetails(index)}
                        className="mt-6 mx-auto block w-1/2 rounded-md bg-black px-1 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    >
                        Remove perk
                    </button>
                    <p className="mt-6 text-xs leading-5 text-gray-600">Invoices and receipts available for easy company reimbursement</p>
                </div>
            </div>
        </div>
    )
}