import React from 'react';
import { ReactComponent as Logo } from '../../static/logo.svg';

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
  return (
    <Container>
      <a href="/"><Logo /></a>

      <TabsControl>
        <Tabs>
          <Tab active>Carros</Tab>
          <Tab>Motos</Tab>
        </Tabs>

        <SellCar><a href="#vendercarro">Vender meu carro</a></SellCar>
      </TabsControl>
      
      <ContentTab>
        <Types>
          <Type>
            <input type="checkbox" name="type" value="novos" id="novos" />
            <label for="novos">Novos</label>
          </Type>
          <Type>
            <input type="checkbox" name="type" value="usados" id="usados" />
            <label for="usados">Usados</label>
          </Type>
        </Types>

        <LineFlex>
          <BoxG>
            <input type="text" name="name" />
            <select>
              <option value="xxx">xxxx</option>
            </select>
          </BoxG>
          <BoxM>
            <select>
              <option value="xxx">xxxx</option>
            </select>
          </BoxM>
          <BoxM>
            <select>
              <option value="xxx">xxxx</option>
            </select>
          </BoxM>
        </LineFlex>

        <LineFlex>
          <BoxM>
            <select>
              <option value="xxx">xxxx</option>
            </select>
          </BoxM>
          <BoxM>
            <select>
              <option value="xxx">xxxx</option>
            </select>
          </BoxM>
          <BoxG>
            <select>
              <option value="xxx">xxxx</option>
            </select>
          </BoxG>
        </LineFlex>

        <LineFlex>
          <BoxG>
            <AdvancedSearch>> Busca Avançada</AdvancedSearch>
          </BoxG>

          <BoxG>
            <ClearFilters>Limpar filtros</ClearFilters>
            <BtnOffers>Ver Ofertas</BtnOffers>
          </BoxG>
        </LineFlex>
      </ContentTab>
    </Container>
  );
}

export default App;
