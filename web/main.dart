import 'dart:html';

void main() {
  final app = document.getElementById('app');
  final component = BaseComponent(
    tagName: 'div',
    className: 'container',
  );
  final textComponent = TextComponent('Some text');
  final inputComponent = InputComponent(((String text) {
    textComponent.appendText(getLastCharInString(text));
  }), [
    (String text) {
      final lastChar = getLastCharInString(text);
      if (lastChar == 'a') {
        return (error: 'Error', isValid: false);
      }
      return (error: '', isValid: true);
    }
  ], component.node);
  component.append([textComponent, inputComponent]);
  app?.append(component.node);
}

String getLastCharInString(String text) {
  return text.isEmpty ? '' : text.substring(text.length - 1);
}

class BaseComponent<T extends Element> {
  final T node;
  BaseComponent(
      {tagName = 'div', className = '', textContent = '', Element? parentNode})
      : node = document.createElement(tagName) as T {
    node.classes.add(className);
    node.innerText = textContent;
    if (parentNode != null) {
      parentNode.append(node);
    }
  }

  void addClass(String className) {
    node.classes.add(className);
  }

  void append(List<BaseComponent> components) {
    for (var element in components) {
      node.append(element.node);
    }
  }

  void appendElement(BaseComponent component) {
    node.append(component.node);
  }

  void appendText(String text) {
    node.appendText(text);
  }

  void setText(String text) {
    node.innerText = text;
  }

  void addEventListener(String type, dynamic Function(Event) callback) {
    node.addEventListener(type, callback);
  }

  void setInnerHTML(String html) {
    node.innerHtml = html;
  }

  void setAttribute(String attribute, String value) {
    node.setAttribute(attribute, value);
  }

  void remove() {
    node.remove();
  }
}

class TextComponent extends BaseComponent {
  TextComponent(String text, [className = 'text'])
      : super(textContent: text, tagName: 'p', className: className);
}

class ButtonComponent extends BaseComponent<ButtonElement> {
  ButtonComponent(String text, void Function<T>(T) onClick)
      : super(textContent: text, tagName: 'button', className: 'button') {
    addEventListener('click', onClick);
  }
}

class InputComponent extends BaseComponent<InputElement> {
  void Function(String text)? onInput;
  final TextComponent errorText = TextComponent('', 'error');

  List<({String error, bool isValid}) Function(String text)> validators;

  Element? errorContainer;

  InputComponent(
      [this.onInput, this.validators = const [], this.errorContainer])
      : super(tagName: 'input', className: 'input') {
    final onInput = this.onInput;
    if (onInput != null) {
      addEventListener('input', (_) {
        onInput(text);
        var (error, isValid) = validate();
        if (!isValid) {
          node.setCustomValidity(error!);
          errorText.setText(error);
          errorContainer?.append(errorText.node);
        } else {
          node.setCustomValidity('');
          errorText.remove();
        }
      });
    }
  }

  String get text => node.value ?? '';

  @override
  void setText(String text) {
    node.value = text;
  }

  void clear() {
    node.value = '';
  }

  (String? error, bool isValid) validate() {
    for (var validator in validators) {
      final result = validator(text);
      if (!result.isValid) {
        return (result.error, false);
      }
    }
    return (null, true);
  }
}
