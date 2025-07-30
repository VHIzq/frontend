import { faker } from '@faker-js/faker';
import { DashboardModel } from './dashboard.model';

export const mockDashboardData: Array<DashboardModel.RowData> = Array.from({ length: 20 }).map(
  () => {
    const date = faker.date.past();

    return {
      name: faker.person.firstName(),
      firstLastName: faker.person.lastName(),
      secondsLastName: faker.person.lastName(),
      age: faker.number.int({ min: 18, max: 80 }),
      email: faker.internet.email(),
      cellphone: faker.phone.number(),
      entryTipe: faker.helpers.arrayElement(['fiesta', 'reunión', 'evento']),
      invitedBy: faker.person.fullName(),
      visitDay: faker.date.weekday(),
      visitTime: faker.date
        .soon()
        .toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      street: faker.location.street(),
      streetNumber: faker.string.numeric(2),
      zipCode: faker.location.zipCode('#####'),
      referende: faker.location.secondaryAddress(),
      region: faker.location.city(),
      state: faker.location.state(),
      houseNumber: faker.string.numeric(3),
      sex: faker.helpers.arrayElement(['M', 'F']),
      peaceHouseLeader: faker.person.fullName(),
      peaceHouseNumber: faker.string.numeric(2),
      isFirstTimeVisit: faker.datatype.boolean(),
      dateFirstTimeVisit: date,
      network: faker.company.name(),
      pastor: faker.person.fullName(),
      discipulador: faker.person.fullName(),
      comments: faker.lorem.sentence(),
      rowDataId: faker.string.uuid(),
    };
  }
);
