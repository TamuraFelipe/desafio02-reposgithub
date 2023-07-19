import {
    Container,
} from './styles';

export const RepositoryItem = ({data, onClick}) => {

  return (
    <Container key={data.id}>
        <h3><a className='link--blue' href={data.html_url} target='_blank' rel="noreferrer">{data.name}</a></h3>
        <a href={data.owner.html_url} target='_blank' rel="noreferrer">@{data.owner.login}</a>
        <p>{data.description}</p>
        <button type="button" className='link--red' onClick={ () => onClick(data.id)}>Remover repositório</button>
    </Container>
  )
}
