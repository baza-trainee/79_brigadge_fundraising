import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Modal from './Modal';

test('перевірка відображення та закриття модального вікна', async () => {
  render(<Modal active={true} setActive={() => {}} />);

  const modalButton = screen.getByText('Поділитись');
  expect(modalButton).toBeInTheDocument();

  // Застосовуємо асинхронне очікування для кнопки закриття
  await waitFor(() => {
    const closeButton = screen.getByTestId('close-button');
    expect(closeButton).toBeInTheDocument();
  });

  // Клік по кнопці закриття
  fireEvent.click(screen.getByTestId('close-button'));

  // Перевірка, що модальне вікно закрилося
  await waitFor(() => {
    const modal = screen.queryByTestId('modal');
    expect(modal).not.toBeInTheDocument();
  });
});
