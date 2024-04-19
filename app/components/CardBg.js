import React from 'react'

const CardBg = () => {
    return (
        <div>
            <div class="w-96 h-96 relative bg-white border shadow-sm rounded-xl">
                <img class="w-full h-full rounded-xl" src="https://images.unsplash.com/photo-1713364303905-4bf3136feefe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image Description" />
                <div class="absolute top-0 start-0 end-0">
                    <div class="p-4 md:p-5 text-left">
                        <p class="mt-1 text-slate-50">
                            <span class="font-semibold">Preline</span> Press publishes books about economic and technological advancement.
                        </p>
                        <p class="mt-5 text-xs text-slate-400">
                            Visit the site
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardBg