'use client';

import { useEffect, useState } from 'react';

import { Tab } from '@headlessui/react';
import clsx from 'clsx';

import { Container } from '../components/Container';
import backgroundImage from '../images/background-features.jpg';
import screenshotExpenses from '../images/screenshots/expenses.png';
import screenshotInvoicing from '../images/screenshots/invoicing.png';
import screenshotReporting from '../images/screenshots/reporting.png';
import screenshotRefunds from '../images/screenshots/refunds.png';
import screenshotCashFlow from '../images/screenshots/cash_flow.png';
import screenshotClients from '../images/screenshots/clients.png';
import screenshotTransfers from '../images/screenshots/transfers.png';
import screenshotInventory from '../images/screenshots/inventory.png';
import screenshotCardex from '../images/screenshots/cardex.png';

const features = [
    {
        title: 'Facturacion',
        description: 'Facturacion con el SAR o para control interno.',
        image: screenshotInvoicing,
    },
    {
        title: 'Inventario',
        description: 'Manejo de inventario con campos personalizados.',
        image: screenshotInventory,
    },
    {
        title: 'Cardex',
        description: 'Movimientos de cada producto.',
        image: screenshotCardex,
    },
    {
        title: 'Clientes',
        description: 'Registros de clientes con distintos tipos de precios.',
        image: screenshotClients,
    },
    {
        title: 'Gastos',
        description: 'Registro de las salidas monetarias de la empresa.',
        image: screenshotExpenses,
    },
    {
        title: 'Devoluciones',
        description: 'Devolucion de inventario, monetario y credito.',
        image: screenshotRefunds,
    },
    {
        title: 'Arqueo de caja',
        description: 'Entradas y salidas monetarias diarias de la empresa.',
        image: screenshotCashFlow,
    },
    {
        title: 'Transferencias de inventario',
        description: 'Movimientos de inventario entre sucursales.',
        image: screenshotTransfers,
    },
    {
        title: 'Reporteria',
        description: 'Exportar y visualizar todos los reportes que quieras.',
        image: screenshotReporting,
    },
];

export function PrimaryFeatures() {
    let [tabOrientation, setTabOrientation] = useState('horizontal');

    useEffect(() => {
        let lgMediaQuery = window.matchMedia('(min-width: 1024px)');

        function onMediaQueryChange({ matches }) {
            setTabOrientation(matches ? 'vertical' : 'horizontal');
        }

        onMediaQueryChange(lgMediaQuery);
        lgMediaQuery.addEventListener('change', onMediaQueryChange);

        return () => {
            lgMediaQuery.removeEventListener('change', onMediaQueryChange);
        };
    }, []);

    return (
        <section id="features" aria-label="Features for running your books" className="relative pt-20 overflow-hidden bg-blue-600 pb-28 sm:py-32">
            <img
                className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
                src={backgroundImage}
                alt=""
                width={2245}
                height={1636}
                unoptimized
            />
            <Container className="relative">
                <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
                    <h2 className="text-3xl tracking-tight text-white font-display sm:text-4xl md:text-5xl">Caracteristicas del sistema.</h2>
                    <p className="mt-6 text-lg tracking-tight text-blue-100">
                        Si necesitas modulos adicionales o hacer cambios a los existentes, nosotros te apoyamos.
                    </p>
                </div>
                <Tab.Group
                    as="div"
                    className="grid items-center grid-cols-1 pt-10 mt-16 gap-y-2 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
                    vertical={tabOrientation === 'vertical'}
                >
                    {({ selectedIndex }) => (
                        <>
                            <div className="flex pb-4 -mx-4 overflow-x-auto sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                                <Tab.List className="relative z-10 flex px-4 gap-x-4 whitespace-nowrap sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                                    {features.map((feature, featureIndex) => (
                                        <div
                                            key={feature.title}
                                            className={clsx(
                                                'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-3',
                                                selectedIndex === featureIndex
                                                    ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                                                    : 'hover:bg-white/10 lg:hover:bg-white/5'
                                            )}
                                        >
                                            <h3>
                                                <Tab
                                                    className={clsx(
                                                        'font-display text-lg ui-not-focus-visible:outline-none',
                                                        selectedIndex === featureIndex
                                                            ? 'text-blue-600 lg:text-white'
                                                            : 'text-blue-100 hover:text-white lg:text-white'
                                                    )}
                                                >
                                                    <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                                                    {feature.title}
                                                </Tab>
                                            </h3>
                                            <p
                                                className={clsx(
                                                    'mt-2 hidden text-sm lg:block',
                                                    selectedIndex === featureIndex ? 'text-white' : 'text-blue-100 group-hover:text-white'
                                                )}
                                            >
                                                {feature.description}
                                            </p>
                                        </div>
                                    ))}
                                </Tab.List>
                            </div>
                            <Tab.Panels className="lg:col-span-7">
                                {features.map((feature) => (
                                    <Tab.Panel key={feature.title} unmount={false}>
                                        <div className="relative sm:px-6 lg:hidden">
                                            <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                                            <p className="relative max-w-2xl mx-auto text-base text-white sm:text-center">{feature.description}</p>
                                        </div>
                                        <div className="mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[60rem]">
                                            <img
                                                className="w-full"
                                                src={feature.image}
                                                alt=""
                                                priority
                                                sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                                            />
                                        </div>
                                    </Tab.Panel>
                                ))}
                            </Tab.Panels>
                        </>
                    )}
                </Tab.Group>
            </Container>
        </section>
    );
}
