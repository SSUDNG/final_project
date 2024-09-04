import { useRef } from 'react';
import { Link } from 'react-scroll';
import useResponsive from '@/hooks/useResponsive';
import { useDraggable } from 'react-use-draggable-scroll';
import clsx from 'clsx';

const TabsNavigation = () => {
  const { isDesktop, isTablet, isMobile } = useResponsive();
  const ref = useRef<HTMLDivElement>(null);
  const { events } = useDraggable(ref as React.MutableRefObject<HTMLElement>);

  return (
    <div
      ref={ref}
      {...(isMobile ? events : {})}
      className={clsx(
        'sticky flex w-full bg-white text-assistive-strong font-bold border-b border-assistive-strong cursor-pointer z-30 overflow-x-scroll scrollbar-hide',
        isDesktop && 'top-[166px] h-[61px] text-label-lg',
        isTablet && 'top-[64px] h-[50px] text-label-base',
        isMobile && 'top-[53px] h-[45px] text-label-base-m',
      )}>
      <Link
        to="areasTab"
        spy={true}
        smooth={true}
        offset={isDesktop ? -226 : isTablet ? -115 : -98}
        activeClass="active-tab">
        <div
          className={clsx(
            'text-center select-none',
            isDesktop && 'w-[200px] px-8 py-[15px]',
            isTablet && 'w-[120px] px-[6px] py-[11px]',
            isMobile && 'w-[98px] px-[7px] py-[11px]',
          )}>
          평형별 매물가격
        </div>
      </Link>
      <Link
        to="benefitTab"
        spy={true}
        smooth={true}
        offset={isDesktop ? -226 : -115}
        activeClass="active-tab">
        <div
          className={clsx(
            'text-center select-none',
            isDesktop && 'w-[200px] px-8 py-[15px]',
            isTablet && 'w-[120px] px-[6px] py-[11px]',
            isMobile && 'w-[98px] px-[7px] py-[11px]',
          )}>
          혜택 줍줍
        </div>
      </Link>
      <Link to="infraTab" spy={true} smooth={true} offset={isDesktop ? -226 : -115} activeClass="active-tab">
        <div
          className={clsx(
            'text-center select-none',
            isDesktop && 'w-[200px] px-8 py-[15px]',
            isTablet && 'w-[120px] px-[6px] py-[11px]',
            isMobile && 'w-[98px] px-[7px] py-[11px]',
          )}>
          주변 핵심 체크
        </div>
      </Link>
      <Link
        to="propertyTab"
        spy={true}
        smooth={true}
        offset={isDesktop ? -228 : -115}
        activeClass="active-tab">
        <div
          className={clsx(
            'text-center select-none',
            isDesktop && 'w-[200px] px-8 py-[15px]',
            isTablet && 'w-[120px] px-[6px] py-[11px]',
            isMobile && 'w-[98px] px-[7px] py-[11px]',
          )}>
          매물정보
        </div>
      </Link>
      <Link
        to="detailsTab"
        spy={true}
        smooth={true}
        offset={isDesktop ? -228 : -115}
        activeClass="active-tab">
        <div
          className={clsx(
            'text-center select-none',
            isDesktop && 'w-[200px] px-8 py-[15px]',
            isTablet && 'w-[120px] px-[6px] py-[11px]',
            isMobile && 'w-[98px] px-[7px] py-[11px]',
          )}>
          상세정보
        </div>
      </Link>
      <Link
        to="locationTab"
        spy={true}
        smooth={true}
        offset={isDesktop ? -226 : -64}
        activeClass="active-tab">
        <div
          className={clsx(
            'text-center select-none',
            isDesktop && 'w-[200px] px-8 py-[15px]',
            isTablet && 'w-[120px] px-[6px] py-[11px]',
            isMobile && 'w-[98px] px-[7px] py-[11px]',
          )}>
          위치
        </div>
      </Link>
    </div>
  );
};

export default TabsNavigation;