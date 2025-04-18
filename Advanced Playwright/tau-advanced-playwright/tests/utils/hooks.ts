import { Page } from '@playwright/test';
import { buildUrl } from './uiUrlBuilder';
import BookPage from '../ui/pages/book-page';
import LoginPage from '../ui/pages/login-page';
import ProfilePage from '../ui/pages/profile-page';
import SearchPage from '../ui/pages/profile-page';

async function beforeEach(
  page: Page,
  PageObjectParam: new (page: Page) => LoginPage|BookPage|ProfilePage|SearchPage,
  targetPage: string,
  params?: Record<any, any>
) {
  await page.goto(buildUrl(targetPage, params));
  const pageObject = new PageObjectParam(page);
  return pageObject;
}

export default { beforeEach };
