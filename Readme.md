# Some tests for bugs in the FF WebExtensions

Bug 1: Seems that FF 57 is not rendering popups every-time, resulting in a blank popup.

Reproduce: Install addon temporarily, right-click on page and click on context-menu "open popup".

Bug 2: autofocus property in formelements is not working on internal popups

Reproduce: Install temporary addon and click on Test popup icon (the darkgrey key) to open an internal popup via page_action. 
The focus is not on the inputfield2. But changing the focus via JS is working fine (click the link).

In an external popup window the autofocus is working fine. Use the context menu to open an external popup (see Bug 1).




