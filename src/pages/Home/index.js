import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReactComponent as Logo } from '../../static/logo.svg';
import { getMake, getModel, getVersion } from '../../actions';

import {
  Container,
  TabsControl,
  ContentTab,
  Tabs,
  Tab,
  SellCar,
  Types,
  Type,
  LineFlex,
  BoxG,
  BoxM,
  ClearFilters,
  BtnOffers,
  AdvancedSearch
} from './home.css';

function App() {
  const dispatch = useDispatch();
  
  const handleGetMake = async () => {
    const resultMake =  await getMake();
    dispatch({ type: 'GET_MAKE', payload: resultMake });
    dispatch({ type: 'STOP_LOADING' });
  }

  const handleGetModel = async (ID) => {
    const resultModel =  await getModel(ID);
    dispatch({ type: 'GET_MODEL', payload: resultModel });
    dispatch({ type: 'STOP_LOADING' });
  }

  const handleGetVersion = async (ID) => {
    const resultVersion =  await getVersion(ID);
    dispatch({ type: 'GET_VERSION', payload: resultVersion });
    dispatch({ type: 'STOP_LOADING' });
  }

  const handleResetFilters = () => {
    dispatch({ type: 'RESET_FILTERS' });
    handleGetMake();
  }

  useEffect(() => {
    handleGetMake();
  }, []);

  const { make, model, version, loading } = useSelector(state => state);
  
  return (
    <Container>
      <a href="/"><Logo /></a>

      <TabsControl>
        <Tabs>
          <Tab active>Carros</Tab>
          <Tab>Motos</Tab>
        </Tabs>

        <SellCar>Vender meu carro</SellCar>
      </TabsControl>
      
      <ContentTab>
        <Types>
          <Type>
            <input type="checkbox" name="type" value="novos" id="novos" />
            <label htmlFor="novos">Novos</label>
          </Type>
          <Type>
            <input type="checkbox" name="type" value="usados" id="usados" />
            <label htmlFor="usados">Usados</label>
          </Type>
        </Types>

        <LineFlex>
          <BoxG>
            <input type="text" name="city" placeholder="Onde:" />
            <select>
              <option value="100">Raio: 100km</option>
              <option value="80">Raio: 80km</option>
              <option value="60">Raio: 60km</option>
              <option value="40">Raio: 40km</option>
              <option value="20">Raio: 20km</option>
              <option value="10">Raio: 10km</option>
            </select>
          </BoxG>
          <BoxM>
            <select onChange={e => handleGetModel(e.target.value)}>
              <option value="0">{loading ? "Carregando..." : "Marca: Todas"}</option>
              {make?.map(item =>
                <option key={item.ID} value={item.ID}>{ item.Name }</option>
              )}
            </select>
          </BoxM>
          <BoxM>
            <select
              disabled={model?.length === 0 ? true : false}
              onChange={e => handleGetVersion(e.target.value)}
            >
              <option value="0">{loading ? "Carregando..." : "Modelo: Todos"}</option>
              {model?.map(item =>
                <option key={item.ID} value={item.ID}>{ item.Name }</option>
              )}
            </select>
          </BoxM>
        </LineFlex>

        <LineFlex>
          <BoxM>
            <select>
              <option value="">Ano Desejado</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
            </select>
          </BoxM>
          <BoxM>
            <select>
              <option value="">Faixa de Preço</option>
              <option value="70000">até 70.000,00</option>
              <option value="60000">até 60.000,00</option>
              <option value="50000">até 50.000,00</option>
              <option value="40000">até 40.000,00</option>
            </select>
          </BoxM>
          <BoxG>
            <select disabled={version?.length === 0 ? true : false}>
              <option value="0">Versão</option>
              {version?.map(item =>
                <option key={item.ID} value={item.ID}>{ item.Name }</option>
              )}
            </select>
          </BoxG>
        </LineFlex>

        <LineFlex>
          <BoxG>
            <AdvancedSearch>&#62; Busca Avançada</AdvancedSearch>
          </BoxG>

          <BoxG>
            <ClearFilters onClick={() => handleResetFilters()}>Limpar filtros</ClearFilters>
            <BtnOffers>Ver Ofertas</BtnOffers>
          </BoxG>
        </LineFlex>
      </ContentTab>
    </Container>
  );
}

export default App;
