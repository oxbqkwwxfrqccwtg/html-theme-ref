function convertDropdownMenuItems(items: NodeListOf<Element>): void {
  Array.prototype.forEach.call(items, (li: Element) => {
    // Get dropdown toggle button
    const dropdownToggle = li.querySelector('.dropdown-toggle') as HTMLElement | null;

    // Get dropdown menu item data
    const menuItemTitle = li.querySelector('a > span')!.innerHTML;
    const menuItemLinkElement = li.querySelector('a') as HTMLAnchorElement;
    const menuItemLink = menuItemLinkElement.href;

    // Remove dropdown menu item link
    menuItemLinkElement.remove();

    // Add dropdown menu item title to dropdown toggle button
    if (dropdownToggle) {
      dropdownToggle.innerHTML = menuItemTitle;
    }

    // Create new nav element
    const navElement = document.createElement('li');
    navElement.classList.add('menu-item');

    // Add dropdown menu item data to nav element
    // Create elements
    const navElementLink = document.createElement('a');
    const navElementLinkSpan = document.createElement('span');

    // Add data to elements
    // Span
    navElementLinkSpan.innerHTML = menuItemTitle;
    navElementLinkSpan.setAttribute('itemprop', 'name');
    // Link
    navElementLink.setAttribute('itemprop', 'url');
    navElementLink.href = menuItemLink;
    navElementLink.classList.add('dropdown-item');

    // Append elements
    navElementLink.appendChild(navElementLinkSpan);
    navElement.appendChild(navElementLink);

    // Get the sub menu first child and add the new nav element before it
    const subMenuFirstChild = li.querySelector('.sub-menu > li');
    const subMenu = li.querySelector('.sub-menu') as HTMLElement | null;
    if (subMenu) {
      subMenu.insertBefore(navElement, subMenuFirstChild);
    }
  });
}

export default convertDropdownMenuItems;
