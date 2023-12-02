import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/home'
import { CallCenter } from '../pages/callCenter'
import { DeliveryPolicy } from '../pages/deliveryPolicy'
import { ReturnPolicy } from '../pages/returnsPolicy'
import { PickupStore } from '../pages/pickupStore'
import { OrganicAgriculture } from '../pages/organicAgriculture'
import { ConventAgriculture } from '../pages/conventAgriculture'

const AppRoutes = () => {

    return(
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='central-de-atendimento' element={<CallCenter />} />
            <Route path='politica-de-entrega' element={<DeliveryPolicy />} />
            <Route path='politica-de-trocas-e-devolucoes' element={<ReturnPolicy />}/>
            <Route path='politica-retire-na-unidade' element={<PickupStore />}/>
            <Route path='agricultura-organica' element={<OrganicAgriculture />}/>
            <Route path='agricultura-convencional' element={<ConventAgriculture />}/>
        </Routes>
    )
}

export { AppRoutes }