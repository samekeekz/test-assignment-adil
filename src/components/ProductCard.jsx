import { Accordion } from '@mantine/core';
import img1 from '../assets/img1.jpeg';

const ProductCard = () => {
  const content = [
    {
      section: 'Мин. и Макс. Цена',
      data: [
        { label: 'Мин. Цена', value: 1000 },
        { label: 'Шаг', value: 10 },
        { label: 'Макс. Цена', value: 1800 },
      ],
    },
    {
      section: 'Quattro', // Любой магазин
      data: [
        { label: 'Цена Quattro', value: 1500 },
        { label: 'Позиция Quattro', value: 3 },
      ],
    },
    {
      section: 'Время и Дата Сканирования',
      data: [
        { label: 'Дата сканирования', value: '30.11.2023' },
        { label: 'Время сканирования', value: '11:45' },
      ],
    },
  ];

  const items = content.map(item => (
    <Accordion.Item key={item.section} value={item.section}>
      <Accordion.Control>{item.section}</Accordion.Control>
      <Accordion.Panel>
        {
          <dl className="flex flex-col">
            {item.data.map(({ label, value }) => (
              <div key={label} className="flex flex-wrap text-sm">
                <dt className="after:content-[':'] after:mr-1">{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        }
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <div className="max-w-full flex flex-col gap-[10px] p-5 rounded-xl shadow-card">
      <div className="flex justify-between items-center flex-wrap text-sm">
        <p>Stratton</p>
        <p>109683237</p>
      </div>
      <div className="h-[250px]">
        <img className="w-full h-full object-contain" src={img1} alt="" />
      </div>
      <div>
        <h3 className="text-2xl leading-6 font-semibold">Батарейка Perfeo AG10/LR1130 10 шт</h3>
        <div className="mt-2">
          <dl className="flex flex-col">
            <div className="flex flex-wrap text-sm">
              <dt className="after:content-[':'] after:mr-1">Цена конкурента больше на</dt>
              <dd>10</dd>
            </div>
            <div className="flex flex-wrap text-sm">
              <dt className="after:content-[':'] after:mr-1">Цена Stratton</dt>
              <dd>1190 тг</dd>
            </div>
            <div className="flex flex-wrap text-sm">
              <dt className="after:content-[':'] after:mr-1">Позиция Stratton</dt>
              <dd>1</dd>
            </div>
          </dl>
          <Accordion
            multiple={true}
            styles={{
              label: {
                fontSize: '16px',
                fontWeight: '500',
                lineHeight: '20px',
                cursor: 'pointer',
                padding: '12px 0 10px 0',
              },
              panel: {
                fontSize: '14px',
                lineHeight: '20px',
              },
              control: {
                padding: 0,
              },
              content: {
                paddingLeft: 0,
                paddingRight: 0,
              },
            }}
          >
            {items}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
