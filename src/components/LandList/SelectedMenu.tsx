import { X } from '@phosphor-icons/react';
import { useState } from 'react';
import { Button } from '../ui/button';
import useResponsive from '@/hooks/useResponsive';
import { Drawer, DrawerContent, DrawerHeader } from '../ui/drawer';
import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog';
import { DialogHeader } from '../ui/dialog';

interface SelectedMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const SelectedMenu = ({ isOpen, onClose }: SelectedMenuProps) => {
  const [activeTab, setActiveTab] = useState<'price' | 'squareMeter' | 'householdNumber'>('price');

  // 전체 값 : 0 ~ 마지막값 해두고 나중에 변경
  // 분양가
  const [priceRange, setPriceRange] = useState<{ min: number | null; max: number | null }>({
    min: 0,
    max: 70000,
  });
  const [priceSelectedIds, setPriceSelectedIds] = useState<number[]>([1]);

  // 면적
  const [squareMeterRange, setSquareMeterRange] = useState<{ min: number | null; max: number | null }>({
    min: 0,
    max: 80,
  });
  const [squareMeterSelectedIds, setSquareMeterSelectedIds] = useState<number[]>([1]);

  // 세대수
  const [householdNumberRange, setHouseholdNumberRange] = useState<{
    min: number | null;
    max: number | null;
  }>({
    min: 0,
    max: 6000,
  });
  const [householdNumberSelectedIds, setHouseholdNumberSelectedIds] = useState<number[]>([1]);

  // 제곱미터
  const [isSquareMeterToggle, setIsSquareMeterToggle] = useState(false);
  const { isMobile } = useResponsive();

  const handleTabChange = (tab: 'price' | 'squareMeter' | 'householdNumber') => {
    setActiveTab(tab);
  };

  const handleButtonClick = (value: number, id: number) => {
    let rangeSetter: React.Dispatch<React.SetStateAction<{ min: number | null; max: number | null }>>;
    let selectedIdsSetter: React.Dispatch<React.SetStateAction<number[]>> = setPriceSelectedIds;
    let maxTabValue = 0;

    if (activeTab === 'price') {
      rangeSetter = setPriceRange;
      selectedIdsSetter = setPriceSelectedIds;
      maxTabValue = 70000;
    } else if (activeTab === 'squareMeter') {
      rangeSetter = setSquareMeterRange;
      selectedIdsSetter = setSquareMeterSelectedIds;
      maxTabValue = 80;
    } else if (activeTab === 'householdNumber') {
      rangeSetter = setHouseholdNumberRange;
      selectedIdsSetter = setHouseholdNumberSelectedIds;
      maxTabValue = 6000;
    }

    selectedIdsSetter((prevIds) => {
      // 전체 버튼 클릭 시 : 0 ~ Tab의 Max값
      if (id === 1) {
        rangeSetter({ min: 0, max: maxTabValue });
        return [1];
      }
      // id = 2 버튼 클릭 시 : 0 ~ id = 2의 값
      if (id === 2) {
        rangeSetter({ min: 0, max: value });
        return [2];
      }
      // 이미 선택된 버튼을 다시 클릭 불가
      if (prevIds.includes(id)) {
        return prevIds;
      }

      // 첫 번째 클릭 (id = 1 or 2 선택 후 버튼 클릭 시 포함) : min 설정
      if (prevIds.length === 0 || prevIds.includes(1) || prevIds.includes(2)) {
        rangeSetter({ min: value, max: null });
        return [id];
      }
      // 두 번째 클릭: min, max 설정
      if (prevIds.length === 1) {
        rangeSetter((prevRange) => {
          if (value < prevRange.min!) {
            return { min: value, max: prevRange.min };
          } else {
            return { min: prevRange.min, max: value };
          }
        });
        return [...prevIds, id];
      }

      // 이미 두 개의 버튼이 선택된 경우: 새로 클릭된 버튼을 min으로 설정
      rangeSetter({ min: value, max: null });
      return [id];
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'min' | 'max') => {
    const value = parseInt(e.target.value, 10) || 0;

    let rangeSetter: React.Dispatch<React.SetStateAction<{ min: number | null; max: number | null }>> =
      setPriceRange;
    let selectedIdsSetter: React.Dispatch<React.SetStateAction<number[]>> = setPriceSelectedIds;

    if (activeTab === 'price') {
      rangeSetter = setPriceRange;
      selectedIdsSetter = setPriceSelectedIds;
    } else if (activeTab === 'squareMeter') {
      rangeSetter = setSquareMeterRange;
      selectedIdsSetter = setSquareMeterSelectedIds;
    } else if (activeTab === 'householdNumber') {
      rangeSetter = setHouseholdNumberRange;
      selectedIdsSetter = setHouseholdNumberSelectedIds;
    }

    selectedIdsSetter([]);

    rangeSetter((prevRange) => {
      if (field === 'min') {
        return { min: value, max: prevRange.max };
      } else {
        return { min: prevRange.min, max: value };
      }
    });
  };

  const handleSquareMeterToggle = () => {
    // 제곱미터 토글 버튼을 눌렀을 때 input 값 변환
    setIsSquareMeterToggle((prevToggle) => {
      const newToggle = !prevToggle;
      setSquareMeterRange((prevRange) => {
        const unit = 3.3;
        const changeUnit = (value: number | null) =>
          value !== null ? (newToggle ? Math.round(value * unit) : Math.round(value / unit)) : null;

        return {
          min: changeUnit(prevRange.min),
          max: changeUnit(prevRange.max),
        };
      });
      return newToggle;
    });
  };

  const getValues = () => {
    if (activeTab === 'price')
      return [
        { id: 1, value: 0, text: '전체' },
        { id: 2, value: 5000, text: '~5천' },
        { id: 3, value: 5000, text: '5천' },
        { id: 4, value: 10000, text: '1억' },
        { id: 5, value: 20000, text: '2억' },
        { id: 6, value: 30000, text: '3억' },
        { id: 7, value: 40000, text: '4억' },
        { id: 8, value: 50000, text: '5억' },
        { id: 9, value: 60000, text: '6억' },
        { id: 10, value: 70000, text: '7억~' },
      ];
    if (activeTab === 'squareMeter' && !isSquareMeterToggle)
      return [
        { id: 1, value: 0, text: '전체' },
        { id: 2, value: 10, text: '~10평' },
        { id: 3, value: 10, text: '10평' },
        { id: 4, value: 20, text: '20평' },
        { id: 5, value: 30, text: '30평' },
        { id: 6, value: 40, text: '40평' },
        { id: 7, value: 50, text: '50평' },
        { id: 8, value: 60, text: '60평' },
        { id: 9, value: 70, text: '70평' },
        { id: 10, value: 80, text: '80평~' },
      ];
    if (activeTab === 'squareMeter' && isSquareMeterToggle)
      return [
        { id: 1, value: 0, text: '전체' },
        { id: 2, value: 33, text: '~33㎡' },
        { id: 3, value: 33, text: '33㎡' },
        { id: 4, value: 66, text: '66㎡' },
        { id: 5, value: 99, text: '99㎡' },
        { id: 6, value: 132, text: '132㎡' },
        { id: 7, value: 165, text: '165㎡' },
        { id: 8, value: 198, text: '198㎡' },
        { id: 9, value: 231, text: '231㎡' },
        { id: 10, value: 264, text: '264㎡~' },
      ];
    if (activeTab === 'householdNumber')
      return [
        { id: 1, value: 0, text: '전체' },
        { id: 2, value: 1000, text: '~1천' },
        { id: 3, value: 1000, text: '1천' },
        { id: 4, value: 1500, text: '1.5천' },
        { id: 5, value: 2000, text: '2천' },
        { id: 6, value: 2500, text: '2.5천' },
        { id: 7, value: 3000, text: '3천' },
        { id: 8, value: 4000, text: '4천' },
        { id: 9, value: 5000, text: '5천' },
        { id: 10, value: 6000, text: '6천~' },
      ];
    return [];
  };

  const getCurrentRange = () => {
    if (activeTab === 'price') return priceRange;
    if (activeTab === 'squareMeter') return squareMeterRange;
    if (activeTab === 'householdNumber') return householdNumberRange;
    return { min: null, max: null };
  };

  const getCurrentSelectedIds = () => {
    if (activeTab === 'price') return priceSelectedIds;
    if (activeTab === 'squareMeter') return squareMeterSelectedIds;
    if (activeTab === 'householdNumber') return householdNumberSelectedIds;
    return [];
  };

  const currentRange = getCurrentRange(); // 현재 선택된 Tab의 범위 값
  const selectedIds = getCurrentSelectedIds(); // 현재 선택된 Tab의 button Id

  const handleReset = () => {
    // 모두 초기화
    setPriceRange({ min: 0, max: 70000 });
    setPriceSelectedIds([1]);
    setSquareMeterRange({ min: 0, max: 80 });
    setSquareMeterSelectedIds([1]);
    setIsSquareMeterToggle(false);
    setHouseholdNumberRange({ min: 0, max: 6000 });
    setHouseholdNumberSelectedIds([1]);
  };

  const handleSubmit = () => {
    // 적용 누르면 api 보내기, max가 min보다 작을 때 안 되게 하기
    console.log(
      'price',
      priceRange.min,
      priceRange.max,
      'squareMeter',
      squareMeterRange,
      'householdNumber',
      householdNumberRange,
    );
  };

  const renderContent = () => {
    return (
      <>
        <div className={`flex justify-end px-8 py-2 ${isMobile ? 'hidden' : 'block'}`}>
          <X size={32} className="text-assistive-strong cursor-pointer" onClick={onClose} />
        </div>
        <div>
          <div
            className={`flex items-center justify-center w-full gap-2 ${isMobile ? 'text-label-lg-m' : 'py-3 text-label-lg'} font-bold text-center`}>
            {/* 저장된 값 있으면 색 변경 이후 추가 */}
            <div
              className={`w-full px-7 py-4 ${activeTab === 'price' ? 'text-primary-default' : 'text-assistive-detail'} cursor-pointer`}
              onClick={() => handleTabChange('price')}>
              분양가
            </div>
            <div className="w-[1px] h-6 bg-assistive-strong"></div>
            <div
              className={`w-full px-7 py-4 ${activeTab === 'squareMeter' ? 'text-primary-default' : 'text-assistive-detail'} cursor-pointer`}
              onClick={() => handleTabChange('squareMeter')}>
              면적
            </div>
            <div className="w-[1px] h-6 bg-assistive-strong"></div>
            <div
              className={`w-full px-7 py-4 ${activeTab === 'householdNumber' ? 'text-primary-default' : 'text-assistive-detail'} cursor-pointer`}
              onClick={() => handleTabChange('householdNumber')}>
              세대수
            </div>
          </div>
        </div>
        <div>
          <div
            className={`${!isMobile ? `${activeTab === 'squareMeter' ? '' : 'mt-[64px]'} mx-[50px]` : `${activeTab === 'squareMeter' ? '' : 'mt-[70px]'} my-6`} `}>
            <div className={`${activeTab === 'squareMeter' ? 'block' : 'hidden'} flex justify-end mb-5`}>
              {/* Button 변경예정 */}
              <Button
                size="sm"
                variant="assistive"
                onClick={handleSquareMeterToggle}
                className={`${isSquareMeterToggle ? 'bg-primary-strong' : ''} ${isMobile ? 'py-3 px-6' : ''}`}>
                ㎡
              </Button>
            </div>
            <div>
              <div className={`grid grid-cols-5 ${!isMobile ? ' mb-7' : ''}`}>
                {getValues().map(({ id, value, text }) => (
                  <button
                    key={id}
                    onClick={() => handleButtonClick(value, id)}
                    className={`py-4 text-center border border-assistive-default ${isMobile ? 'text-label-base-m' : 'text-label-sm'} text-assistive-detail ${
                      selectedIds.includes(id) ? 'bg-primary-default text-white' : ''
                    }`}>
                    {text}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`flex justify-center items-center py-6 gap-3 text-static-default font-bold ${isMobile ? 'text-label-sm-m' : 'text-label-sm'}`}>
            <input
              type="text"
              placeholder="최소"
              value={selectedIds.includes(1) ? '' : currentRange.min !== null ? currentRange.min : ''}
              onChange={(e) => handleInputChange(e, 'min')}
              className="w-[123px] px-3 py-4 border rounded-4 text-center"
            />
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="5" viewBox="0 0 18 5" fill="none">
              <path
                d="M0 1.72905C0.638831 1.32682 1.35282 1.02142 2.14196 0.812849C2.93111 0.604283 3.77035 0.5 4.65971 0.5C5.34864 0.5 6.01253 0.552142 6.65136 0.656425C7.30271 0.760708 8.10438 0.917132 9.05637 1.1257C9.95825 1.33426 10.7411 1.49441 11.405 1.60615C12.0814 1.71788 12.7641 1.77374 13.453 1.77374C14.3173 1.77374 15.1378 1.66946 15.9144 1.46089C16.691 1.25233 17.3862 0.946927 18 0.544693V3.27095C17.3612 3.67318 16.6472 3.97858 15.858 4.18715C15.0689 4.39572 14.2296 4.5 13.3403 4.5C12.6514 4.5 11.9687 4.44413 11.2923 4.3324C10.6284 4.22067 9.84551 4.06052 8.94363 3.85196C7.99165 3.64339 7.18998 3.48696 6.53862 3.38268C5.89979 3.2784 5.23591 3.22626 4.54697 3.22626C3.68267 3.22626 2.86221 3.33054 2.0856 3.53911C1.30898 3.74767 0.613779 4.05307 0 4.45531V1.72905Z"
                fill="#B2B6BE"
              />
            </svg>
            <input
              type="text"
              placeholder="최대"
              value={selectedIds.includes(1) ? '' : currentRange.max !== null ? currentRange.max : ''}
              onChange={(e) => handleInputChange(e, 'max')}
              className="w-[123px] px-3 py-4 border rounded-4 text-center"
            />
          </div>
          <div className={`flex justify-center items-center py-6 gap-5 ${isMobile ? '' : 'px-8'}`}>
            <Button variant="assistive" className="w-[157px]" onClick={handleReset}>
              초기화
            </Button>
            <Button className="w-[157px]" onClick={handleSubmit}>
              적용하기
            </Button>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {isMobile && isOpen ? (
        <Drawer open={true} onOpenChange={onClose}>
          <DialogHeader>
            <DialogTitle></DialogTitle>
          </DialogHeader>
          <DrawerContent className={`h-[420px] pt-4 px-5 bg-white`}>
            <DialogDescription />
            {renderContent()}
          </DrawerContent>
        </Drawer>
      ) : (
        <div
          className={`absolute right-0 mt-12 w-[420px] h-[500px] py-5 bg-white rounded-9 shadow-[0_4px_20px_0] shadow-effect-shadow z-10 transition-opacity duration-300 ${
            isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}>
          {renderContent()}
        </div>
      )}
    </>
  );
};

export default SelectedMenu;