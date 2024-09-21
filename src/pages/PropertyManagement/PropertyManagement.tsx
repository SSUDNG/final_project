// import { myProperty } from '@/lib/tableItems';
import { MyPropertyTable } from '@/components/Table/MyPropertyTable';
import { columnsMyProperty } from '@/components/ui/columnsMyProperyt';
import SampleImg from '../../../public/Imagesample.png';
import Breadcrumb from '@/components/common/Breadcrumb';
import NoProperty from '@/components/CustomerService/NoProperty';
import { useQuery } from '@tanstack/react-query';
import { fetchPropertyTable } from '@/api/property';

export default function PropertyManagement() {
  const page = 0;
  const size = 4;

  const {
    data: myPropertyData = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ['properties', { page, size }],
    queryFn: fetchPropertyTable,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading properties</div>;
  return (
    <main className="flex">
      <section className="container mx-auto py-10 ">
        <Breadcrumb links={['마이페이지', '매물관리']} />
        <h1 className="w-full py-3 px-6 mb-11 text-center text-heading-lg font-bold ">매물관리</h1>

        {/* 이 위치에 매물 카드 들어갑니다. */}
        {myPropertyData.length === 0 ? (
          <div className="flex h-[412px] items-center">
            <NoProperty />
          </div>
        ) : (
          <article className="flex flex-col mb-10">
            <div className="flex mb-6">
              <img
                src={myPropertyData[0].image || SampleImg}
                alt={myPropertyData[0].name}
                className="object-cover w-[272px] h-[153px]"
              />
            </div>
            <h1 className="mb-5 text-title-xl font-bold">{myPropertyData[0].name}</h1>
            <p className="text-detail-lg font-normal text-assistive-strong">{`${myPropertyData[0].propertyType} ${myPropertyData[0].saleType}`}</p>
          </article>
        )}

        {/* 매물 리스트 테이블 */}
        <MyPropertyTable columns={columnsMyProperty} data={myPropertyData} />
      </section>
    </main>
  );
}
