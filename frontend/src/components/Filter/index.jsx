import typesColor from '../../styles/typesColor'
import * as S from './styles'

const Filter = ({filter}) => {
  return (
    <S.Container>
      <S.SearchContainer>
        <S.SearchLabel>Search</S.SearchLabel>
        <S.SearchInput
          name='search'
          value={filter.search}
          onChange={filter.control}
          placeholder='Name or #ID'
        />
      </S.SearchContainer>
      <S.Image src={'static/img/pokebola.png'} />
      <S.TypeContainer>
        <S.TypeLabel>Type</S.TypeLabel>
        <S.TypeInput name='type' value={filter.type} onChange={filter.control}>
          <S.TypeOption value=''>Choose a type</S.TypeOption>
          {Object.keys(typesColor).map(t => (
            <S.TypeOption key={t} value={t}>
              {t}
            </S.TypeOption>
          ))}
        </S.TypeInput>
      </S.TypeContainer>
    </S.Container>
  )
}

export default Filter
