import { useState } from 'react';

import { api } from '../../services/api';

import imglogo from '../../assets/github.png';

import Button from '../../components/Button';
import { Input } from '../../components/Input';
import { RepositoryItem } from '../../components/RepositoryItem';

import {
  Container,
  Header,
  Error,
  FormContainer,
  RepoList,
} from './styles';
export function Home() {
  const [repos, setRepos] = useState([]);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(false)
    
  const handleClick = async () => {
    
    if(search === ""){
      setError(true)
      return;
    }
    
    try {
      const {data} = await api.get(`/repos/${search}`);
    
      if(data.id) {
        const isExist = repos.find( item => item.id === data.id)      
        if(!isExist) {
          setRepos( prevRepo => [...prevRepo, data])
          setSearch('');
          return;
        } else {
          alert("Repositório já está na lista!")
          setSearch('')
          return;
        }
      } 
    } catch (error) {
      if(error.response && error.response.status === 404) {
        alert("Repositório não encontrado!")
      } else {
        alert("Erro ao buscar repositório!")
      }
    }
  }

  const handleRemove = (id) => {
    const updateRepos = repos.filter( repo => repo.id !== id);
    setRepos(updateRepos)
  }

  return (
    <main>
      <Container>
        <Header>
          <img src={imglogo} alt="Logo Github" />
        </Header>
        
        <FormContainer>
          <Input 
          id="search"
          title="Pesquisar"
          placeholder="Ex: user/repositorio"
          value={search}
          setError={setError}
          error={error}
          onChange={setSearch}
          />
          <Button 
          title="Pesquisar"
          type="button"
          onClick={handleClick}
          />
        </FormContainer>
        {
          error && <Error>Campo não pode estar vazio!</Error>
        }
        
        <RepoList>
          <h2>Repositório</h2>
          {
            repos && repos.length === 0 ?
            <p>Sem repositórios listados!</p>
            :
            repos.map( repo => <RepositoryItem key={repo.id} data={repo} onClick={handleRemove}/>)
          }
        </RepoList>
      
      </Container>
    </main>
  );
}
