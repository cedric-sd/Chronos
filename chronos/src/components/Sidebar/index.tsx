import * as S from 'styles/components/Sidebar'

import { GiHourglass } from 'react-icons/gi'
import { BsBookmarkPlus, BsArrowsCollapse, BsStarFill } from 'react-icons/bs'

export default function Sidebar() {
  return (
    <S.ContainerSidebar>
      <S.ListIcons>
        <li>
          <S.Buttons>
            <GiHourglass />
          </S.Buttons>
        </li>
        <li>
          <S.Buttons>
            <BsBookmarkPlus />
          </S.Buttons>
        </li>
        <li>
          <S.Buttons>
            <BsArrowsCollapse />
          </S.Buttons>
        </li>
        <li>
          <S.Buttons>
            <BsStarFill />
          </S.Buttons>
        </li>
      </S.ListIcons>
    </S.ContainerSidebar>
  )
}
