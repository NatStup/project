export default function personMock( numberPerson: number ){
  if (numberPerson === 1) {
    return {
      direction: 'СТРОИТЕЛЬСТВО',
      applicantType: 'Индивидуальный предприниматель',
      regionOfProvision: 'Краснодарский край',
      specificTags: 'БЕТОН',
    }
  } else if (numberPerson === 2) {
    return {
      direction: 'ОБРАЗОВАНИЕ',
      applicantType: 'Физическое лицо',
      regionOfProvision: 'Москва',
      specificTags: 'УСЛУГИ',
    }
  } else {
    return {
      direction: 'ОБЕСПЕЧЕНИЕ ЭЛЕКТРИЧЕСКОЙ ЭНЕРГИЕЙ, ГАЗОМ И ПАРОМ; КОНДИЦИОНИРОВАНИЕ ВОЗДУХА',
      applicantType: 'Юридическое лицо',
      regionOfProvision: 'Курганская область',
      specificTags: 'ОБОРУДОВАНИЕ',
    }
  }
}
