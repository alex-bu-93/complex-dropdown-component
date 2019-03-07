import { Injectable } from '@angular/core';
import { PaginatedList } from '../models/paginated-list.model';

import { includes } from 'lodash';

@Injectable()
export class TestDataService {

  getPaginatedData(input: string, page: number, pageSize: number) {
    let paginatedData: PaginatedList<any> = this.getFullTestData();
    paginatedData = this.filteredItems(paginatedData, input);
    paginatedData = this.paginatedItems(paginatedData, page, pageSize);

    return paginatedData;
  }

  getFullTestData() {
    return {
      items: [
        {
          id: 1,
          name: 'Elenora',
          age: 43,
          description: 'Lorem ipsum dolor sit amet, Abe Stayton consectetur adipiscing elit. Ut blandit viverra diam luctus ',
          gender: 'm'
        },
        {
          id: 2,
          name: 'Felisha',
          age: 50,
          description: 'Vivamus porttitor, orci id vestibulum consequat, quam Will Kleeman odio elementum tortor, nec posuer',
          gender: 'm'
        },
        {
          id: 3,
          name: 'Michelina',
          age: 48,
          description: 'Proin a velit tortor. Suspendisse congue mattis vestibulum. Curabitur Vincenzo Carreiro pretium accu',
          gender: 'f'
        },
        {
          id: 4,
          name: 'Shawna',
          age: 28,
          description: 'Aliquam et Emelia Ronning elementum nulla. Integer consequat dignissim vestibulum. Maecenas consequa',
          gender: 'f'
        },
        {
          id: 5,
          name: 'Ardith',
          age: 34,
          description: 'Cras Johana Oullette ultrices erat eu ipsum hendrerit in scelerisque purus tincidunt. Nam Chloe Dela',
          gender: 'f'
        },
        {
          id: 6,
          name: 'Drew',
          age: 43,
          description: 'Feet evil to hold long he open knew an no. Apartments occasional boisterous as solicitude to introdu',
          gender: 'f'
        },
        {
          id: 7,
          name: 'Shenika',
          age: 23,
          description: 'One advanced diverted domestic sex repeated bringing you old. Possible procured her trifling laughte',
          gender: 'f'
        },
        {
          id: 8,
          name: 'Noelia',
          age: 35,
          description: 'Inhabiting discretion the her dispatched decisively boisterous joy. So form were wish open is able o',
          gender: 'm'
        },
        {
          id: 9,
          name: 'An',
          age: 48,
          description: 'His exquisite sincerity education shameless ten earnestly breakfast add. So we me unknown as improve',
          gender: 'm'
        },
        {
          id: 10,
          name: 'Vanda',
          age: 49,
          description: 'Bringing unlocked me an striking ye perceive. Mr by wound hours oh happy. Me in resolution pianofort',
          gender: 'm'
        },
        {
          id: 11,
          name: 'Christine',
          age: 32,
          description: 'Him rendered may attended concerns jennings reserved now. Sympathize did now preference unpleasing m',
          gender: 'f'
        },
        {
          id: 12,
          name: 'Becki',
          age: 28,
          description: 'An so vulgar to on points wanted. Not rapturous resolving continued household northward gay. He it o',
          gender: 'm'
        },
        {
          id: 13,
          name: 'Norma',
          age: 38,
          description: 'Next his only boy meet the fat rose when. Do repair at we misery wanted remove remain income. Occasi',
          gender: 'm'
        },
        {
          id: 14,
          name: 'Herlinda',
          age: 25,
          description: 'Knowledge nay estimable questions repulsive daughters boy. Solicitude gay way unaffected expression ',
          gender: 'f'
        },
        {
          id: 15,
          name: 'Renae',
          age: 28,
          description: 'Dwelling and speedily ignorant any steepest. Admiration instrument affronting invitation reasonably ',
          gender: 'm'
        },
        {
          id: 16,
          name: 'Rayna',
          age: 48,
          description: 'Ask especially collecting terminated may son expression. Extremely eagerness principle estimable own',
          gender: 'f'
        },
        {
          id: 17,
          name: 'Shakira',
          age: 27,
          description: 'Offered say visited elderly and. Waited period are played family man formed. He ye body or made on p',
          gender: 'm'
        },
        {
          id: 18,
          name: 'Bertram',
          age: 21,
          description: 'Rooms oh fully taken by worse do. Points afraid but may end law lasted. Was out laughter raptures re',
          gender: 'f'
        },
        {
          id: 19,
          name: 'Carry',
          age: 27,
          description: 'Impossible considered invitation him men instrument saw celebrated unpleasant. Put rest and must set',
          gender: 'f'
        },
        {
          id: 20,
          name: 'Clarinda',
          age: 28,
          description: 'Adieus except say barton put feebly favour him. Entreaties unpleasant sufficient few pianoforte disc',
          gender: 'm'
        },
        {
          id: 21,
          name: 'Frances',
          age: 37,
          description: 'In entirely be to at settling felicity. Fruit two match men you seven share. Needed as or is enough ',
          gender: 'f'
        },
        {
          id: 22,
          name: 'Twanna',
          age: 28,
          description: 'Conveying or northward offending admitting perfectly my. Colonel gravity get thought fat smiling add',
          gender: 'm'
        },
        {
          id: 23,
          name: 'Leesa',
          age: 27,
          description: 'Spoke as as other again ye. Hard on to roof he drew. So sell side ye in mr evil. Longer waited mr of',
          gender: 'm'
        },
        {
          id: 24,
          name: 'Felipe',
          age: 50,
          description: 'Her old collecting she considered discovered. So at parties he warrant oh staying. Square new horses',
          gender: 'f'
        },
        {
          id: 25,
          name: 'Denise',
          age: 42,
          description: 'It allowance prevailed enjoyment in it. Calling observe for who pressed raising his. Can connection ',
          gender: 'f'
        },
        {
          id: 26,
          name: 'Roxann',
          age: 42,
          description: 'Way nor furnished sir procuring therefore but. Warmth far manner myself active are cannot called. Se',
          gender: 'f'
        },
        {
          id: 27,
          name: 'Glenna',
          age: 34,
          description: 'Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children',
          gender: 'm'
        },
        {
          id: 28,
          name: 'Deneen',
          age: 50,
          description: 'Ferrars all spirits his imagine effects amongst neither. It bachelor cheerful of mistaken. Tore has ',
          gender: 'm'
        },
        {
          id: 29,
          name: 'Mirna',
          age: 22,
          description: 'Supplied directly pleasant we ignorant ecstatic of jointure so if. These spoke house of we. Ask put ',
          gender: 'm'
        },
        {
          id: 30,
          name: 'Parthenia',
          age: 21,
          description: 'Behaviour we improving at something to. Evil true high lady roof men had open. To projection conside',
          gender: 'f'
        },
        {
          id: 31,
          name: 'Crysta',
          age: 31,
          description: 'To sure calm much most long me mean. Able rent long in do we. Uncommonly no it announcing melancholy',
          gender: 'm'
        },
        {
          id: 32,
          name: 'Hattie',
          age: 25,
          description: 'Too cultivated use solicitude frequently. Dashwood likewise up consider continue entrance ladyship o',
          gender: 'm'
        },
        {
          id: 33,
          name: 'Andria',
          age: 20,
          description: 'Wrong do point avoid by fruit learn or in death. So passage however besides invited comfort elderly ',
          gender: 'f'
        },
        {
          id: 34,
          name: 'Meridith',
          age: 47,
          description: 'Quick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add ',
          gender: 'm'
        },
        {
          id: 35,
          name: 'Renaldo',
          age: 49,
          description: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may inst',
          gender: 'f'
        },
        {
          id: 36,
          name: 'Bess',
          age: 29,
          description: 'Add you viewing ten equally believe put. Separate families my on drawings do oh offended strictly el',
          gender: 'f'
        },
        {
          id: 37,
          name: 'Tawanna',
          age: 35,
          description: 'Examine she brother prudent add day ham. Far stairs now coming bed oppose hunted become his. You zea',
          gender: 'm'
        },
        {
          id: 38,
          name: 'Anneliese',
          age: 21,
          description: 'Sigh view am high neat half to what. Sent late held than set why wife our. If an blessing building s',
          gender: 'm'
        },
        {
          id: 39,
          name: 'Helena',
          age: 44,
          description: 'Instrument cultivated alteration any favourable expression law far nor. Both new like tore but year.',
          gender: 'f'
        },
        {
          id: 40,
          name: 'Millard',
          age: 31,
          description: 'Spot of come to ever hand as lady meet on. Delicate contempt received two yet advanced. Gentleman as',
          gender: 'f'
        },
        {
          id: 41,
          name: 'Chester',
          age: 36,
          description: 'Him rendered may attended concerns jennings reserved now. Sympathize did now preference unpleasing m',
          gender: 'f'
        },
        {
          id: 42,
          name: 'Leonel',
          age: 30,
          description: 'On recommend tolerably my belonging or am. Mutual has cannot beauty indeed now sussex merely you. It',
          gender: 'm'
        },
        {
          id: 43,
          name: 'Penny',
          age: 43,
          description: 'Open know age use whom him than lady was. On lasted uneasy exeter my itself effect spirit. At design',
          gender: 'f'
        },
        {
          id: 44,
          name: 'Martine',
          age: 32,
          description: 'Remain valley who mrs uneasy remove wooded him you. Her questions favourite him concealed. We to wif',
          gender: 'f'
        },
        {
          id: 45,
          name: 'Roma',
          age: 42,
          description: 'By so delight of showing neither believe he present. Deal sigh up in shew away when. Pursuit express',
          gender: 'f'
        },
        {
          id: 46,
          name: 'Theodore',
          age: 32,
          description: 'Mr oh winding it enjoyed by between. The servants securing material goodness her. Saw principles the',
          gender: 'f'
        },
        {
          id: 47,
          name: 'Tabetha',
          age: 35,
          description: 'In up so discovery my middleton eagerness dejection explained. Estimating excellence ye contrasted i',
          gender: 'f'
        }
      ],
      offset: 1,
      top: 20,
      count: 50
    };
  }

  paginatedItems(data: PaginatedList<any>, page: number, pageSize: number): PaginatedList<any> {
    return {
      items: data.items.filter((x, index) => index > (page - 1) * pageSize - 1 && index < page * pageSize),
      offset: page,
      top: pageSize,
      count: data.items.length
    };
  }

  filteredItems(data: PaginatedList<any>, input: string): PaginatedList<any> {
    if (input) {
      return {
        items: data.items.filter(x => this.checkProperties(x, input)),
        offset: 1,
        count: data.items.filter(x => this.checkProperties(x, input)).length
      };
    } else {
      return new PaginatedList<any>();
    }
  }

  checkProperties(item: any, input: string): boolean {
    for (const prop in item) {
      if (includes(item[prop].toString(), input)) {
        return true;
      }
    }
    return false;
  }

}

